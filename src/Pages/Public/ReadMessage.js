import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingState from '../../includes/enums/LoadingState'
import LoadingScreen from '../../components/loading_spinner/Loadingscreen'
import LoadingMessages from '../../includes/enums/LoadingMessages'
import Content from '../../includes/enums/app/Content'
import HashGenerator from '../../includes/functions/HashGenerator'
import CryptoJS from 'crypto-js'

function ReadMessage(props) {

  // VARIABELS
  const { message_id } = props

  const [loading,setLoading] = useState(LoadingState.Inactive)
  const [loadingText,setLoadingText]=useState(LoadingMessages.GeneralWaiting)

  const [data , setData] = useState("")
  const [pageContent,setPageContent] = useState(Content.ReadMessage)
  const [message,setMessage] = useState("")

  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.href);


  // PAGE FUNCTIONS
  const delete_message = async () => {
    return axios.delete(process.env.REACT_APP_BASE_URL_BACKEND+`/app-data/app-data.php?id=${message_id.id}`)
    .then((response)=>{
      console.log(response.data,'Statuscode:',response.status)
    })
    .catch((err)=>{
      console.log("Ein Fehler beim Löschen ist aufgetreten: ", err)
    })
  }

  const get_message = async () => {
    setLoading(LoadingState.Active)
    return axios.get(process.env.REACT_APP_BASE_URL_BACKEND+`/app-data/app-data.php?id=${message_id.id}`)
    .then((response)=>{
      if(response.data[0].message !== undefined){
        const server_res = response.data[0]
        const clean_mess = getCleanMessage(server_res)
  
        setData(response.data[0])
        delete_message()
      }
      setLoading(LoadingState.Inactive)
      return
    })
    .catch((err)=>{
      window.location.href = process.env.REACT_APP_BASE_URL;
    })
  }

  const close_window = (e) => {
    e.preventDefault();
    window.close();
  }

  const responseMessge = () => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search); 
    params.delete("?id=");
    window.location.href = process.env.REACT_APP_BASE_URL_RESPONSE;
  }

  const getCleanMessage =async (encryptedMessage)=>{
    const message = encryptedMessage.message;
    let loop_counter = 0;


    for (var param of searchParams) {
      if(loop_counter <= 1){
        let secret_key = param[1];
        let decrypted_message = await HashGenerator.decryptMessage(message,secret_key);
        setMessage(decrypted_message)
      }else{
        loop_counter ++
      }
    }
  }


  useEffect(() => {
    get_message()
  }, [])
  

  return (
    <>
      {loading === LoadingState.Active && <LoadingScreen text={loadingText}/>}
      <main className='bg-gradient-to-t from-green-400 to-green-800 h-full md:h-auto px-8'>
        <section className='w-full bg-gradient-to-b from-blue-500 to-blue-700 rounded-t-lg px-1 md:px-40'>
          <header className='py-4 '>
            <h1 className='text-xl font-bold text-white px-10'>{pageContent.header}</h1>
          </header>
        </section>
        
        <section className='md:px-5 mt-8'>
          <h2 className='font-bold text-left mb-2 px-1'>Deine Nachricht:</h2>
          <div className='flex w-full bg-[#222222a1] md:min-h-40 mx-auto text-left flex-wrap px-2 py-3 rounded-xl'>
            <p className='text-white flex-wrap'>{data && message }</p>
          </div>
        </section>
        <section>
          <div className='pn__button-group mt-4 '>
            <a href={process.env.REACT_APP_BASE_URL} className='relative pn__btn rounded-lg pr-12'>
              <span className='absolute top-0 right-3 text-xl md:text-2xl'>🏠</span> Zur Startseite
            </a>
            <button className='relative pn__btn rounded-lg bg-blue-500' onClick={()=>responseMessge()}>Antworten</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default ReadMessage