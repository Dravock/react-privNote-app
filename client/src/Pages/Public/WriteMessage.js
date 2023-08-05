import React, { useState } from 'react'
import ShowLink from './ShowMessageLink'
import CreateMessageLink from './CreateMessageLink'
import axios from 'axios'
import LoadingState from '../../includes/enums/LoadingState'
import LoadingMessages from '../../includes/enums/LoadingMessages'

function WriteMessage(props) {
    const { setPage} = props
    const [message,setMessge] = useState({message:''})
    const [link,setLink] = useState('')

    const [loading,setLoading] = useState(LoadingState.Inactive)
    const [loadingText,setLoadingText]=useState(LoadingMessages.createLink)

    const [showLinkPage,setShowLinkPage] = useState(false)

    const [captachNumber,setCaptachNumber] = useState({number1:0,number2:0,result:0})

    const changePage = () => {
        setPage({start: true, writeMessage: false , readMessage: false})
    }

    const getMessageLink = (event) => { 
        event.preventDefault()
    }

    const generateCaptchaNr = () => {
        const number1 = Math.floor(Math.random(1)*10)

        const number2 = Math.floor(Math.random(1)*10)
        console.log(number1,number2)
        setCaptachNumber({...captachNumber,number1:number1,number2:number2,result:number1+number2})
    }

    const submit = async (e) =>{
        e.preventDefault()
        if( message.message !== '' &&  message.message !== undefined && message.message !== null ) {    
            if(captachNumber.result === parseInt(message.pn_smart_captacha)) {
                setLoading(LoadingState.Active)
                axios.post(process.env.REACT_APP_BASE_URL_BACKEND+'/app-data/app-data.php',message)
                .then(res => {
                    setLink(res.data)
                    setLoading(LoadingState.Inactive)
                })
                .catch(err => {
                    console.log("Ein Fehler beim abfragen: ", err)
                    setLoading(LoadingState.Inactive)
                })
                setShowLinkPage(true)
            }else{
                const get_pop_up = document.getElementById('pn_warning_pop_up')
                get_pop_up.classList.remove('hidden')
            }
        }else{
            const get_pop_up = document.getElementById('pn_error_pop_up')
            get_pop_up.classList.remove('hidden')
        }
    }

console.log(message)

return (
    <>
        {!showLinkPage ? 
                <CreateMessageLink changePage={changePage} getMessageLink={()=>getMessageLink()} setMessge={setMessge} message={message} submit={submit} generateCaptchaNr={generateCaptchaNr} captachNumber={captachNumber}/> 
                : 
                <ShowLink link_id={link} loading={loading} loadingText={loadingText}/> 
        }
    </>

)}

export default WriteMessage