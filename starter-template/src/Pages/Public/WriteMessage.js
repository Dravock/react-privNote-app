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
        
        axios.post(process.env.REACT_APP_BASE_URL+'/',message)
        .then(res => {
            console.log(res)
            setLink(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        setShowLinkPage(true)
        console.log("ok ich gebe dir den link",message.message)
    }


    return (
        <div className=''>
            {!showLinkPage ? <CreateMessageLink changePage={()=>changePage()} getMessageLink={()=>getMessageLink()} setMessge={setMessge} message={message}/> : <ShowLink message={message}/> }
        </div>
    )
}

export default WriteMessage