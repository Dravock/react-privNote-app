import React, { useState } from 'react'
import ShowLink from './ShowMessageLink'
import CreateMessageLink from './CreateMessageLink'
import axios from 'axios'

function WriteMessage(props) {
    const { setPage} = props
    const [message,setMessge] = useState({message:''})
    const [link,setLink] = useState('')


    const [showLinkPage,setShowLinkPage] = useState(false)

    const changePage = () => {
        setPage({start: true, writeMessage: false , readMessage: false})
    }


    const getMessageLink = () => {
        axios.post(process.env.REACT_APP_BASE_URL_BACKEND+'/app-data/app-data.php',message)
        .then(res => {
            setLink(res.data)
        })
        .catch(err => {
            console.log("Ein Fehler beim abfragen: ", err)
        })
        setShowLinkPage(true)
    }

return (

    <div className=''>
        {!showLinkPage ? <CreateMessageLink changePage={()=>changePage()} getMessageLink={()=>getMessageLink()} setMessge={setMessge} message={message}/> : <ShowLink link_id={link}/> }
    </div>

)}

export default WriteMessage