import React, { useState } from 'react'
import ShowLink from './ShowMessageLink'
import CreateMessageLink from './CreateMessageLink'
import axios from 'axios'
import LoadingState from '../../includes/enums/LoadingState'
import LoadingScreen from '../../components/loading_spinner/Loadingscreen'
import LoadingMessages from '../../includes/enums/LoadingMessages'

function WriteMessage(props) {
    const { setPage} = props
    const [message,setMessge] = useState({message:''})
    const [link,setLink] = useState('')

    const [loading,setLoading] = useState(LoadingState.Inactive)
    const [loadingText,setLoadingText]=useState(LoadingMessages.Auth)

    const [showLinkPage,setShowLinkPage] = useState(false)

    const changePage = () => {
        setPage({start: true, writeMessage: false , readMessage: false})
    }


    const getMessageLink = () => {
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
    }

return (
    <div className=''>
        {!showLinkPage ? <CreateMessageLink changePage={()=>changePage()} getMessageLink={()=>getMessageLink()} setMessge={setMessge} message={message}/> : <ShowLink link_id={link}/> }
    </div>

)}

export default WriteMessage