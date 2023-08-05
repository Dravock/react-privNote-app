import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingState from '../../includes/enums/LoadingState'
import LoadingScreen from '../../components/loading_spinner/Loadingscreen'
import LoadingMessages from '../../includes/enums/LoadingMessages'
import Content from '../../includes/enums/app/Content'

function ReadMessage(props) {
  const { message_id } = props

  const [loading,setLoading] = useState(LoadingState.Inactive)
  const [loadingText,setLoadingText]=useState(LoadingMessages.GeneralWaiting)

  const [data , setData] = useState("")
  const [pageContent,setPageContent] = useState(Content.ReadMessage)

  const delete_message = async () => {
    return axios.delete(process.env.REACT_APP_BASE_URL_BACKEND+`/app-data/app-data.php?id=${message_id.id}`)
    .then((response)=>{
      console.log(response.data,'Statuscode:',response.status)
    })
    .catch((err)=>{
      console.log("Ein Fehler beim abfragen: ", err)
    })
  }

  const get_message = async () => {
    setLoading(LoadingState.Active)
    return axios.get(process.env.REACT_APP_BASE_URL_BACKEND+`/app-data/app-data.php?id=${message_id.id}`)
    .then((response)=>{
      if(response.data[0].message !== undefined){
        setData(response.data[0])
        // delete_message()
      }
      setLoading(LoadingState.Inactive)
      return
    })
    .catch((err)=>{
      window.location.href = "http://localhost:3000/";
    })
  }

  const close_window = (e) => {
    e.preventDefault()
    window.close()

  }

  useEffect(() => {
    get_message()
  }, [])
  

  return (
    <>
      {loading === LoadingState.Active && <LoadingScreen text={loadingText}/>}
      <main>
        <section className='bg-gradient-to-b from-blue-500 to-blue-700 rounded-t-lg'>
          <header className=''>
            <h1 className=''>{pageContent.header}</h1>
          </header>
        </section>
        
        <section>
          <div className='flex w-full bg-[#222222c0] md:min-h-40 mx-auto text-left flex-wrap px-2 py-3'>
            <p className='text-white'>{data && data.message }</p>
          </div>
        </section>
        <section>
          <div className='pn__button-group mt-4 '>
            <a href={process.env.REACT_APP_BASE_URL} className='pn__btn rounded-lg pt-3'><span className='text-2xl md:text-3xl mt-8'>🏠</span> Zur Startseite</a>
            <button className='pn__btn bg-red-700/50 rounded-lg pt-3' onClick={()=>close_window()}>Fenster Schließen</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default ReadMessage