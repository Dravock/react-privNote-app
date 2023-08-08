import React, { useState } from 'react'
import ShowLink from './ShowMessageLink'
import CreateMessageLink from './CreateMessageLink'
import axios from 'axios'
import LoadingState from '../../includes/enums/LoadingState'
import LoadingMessages from '../../includes/enums/LoadingMessages'
import HashGenerator from '../../includes/functions/HashGenerator'
import GenerateKeys from '../../includes/functions/GenerateKeys'

function WriteMessage(props) {
    const { setPage, popUpState, setPopUpState } = props
    
    const secret_key =GenerateKeys.generate_random_key(25)

    const [message, setMessge] = useState({ message: '', options: {} })
    const [link, setLink] = useState('')
    const [loading, setLoading] = useState(LoadingState.Inactive)
    const [loadingText, setLoadingText] = useState(LoadingMessages.createLink)
    const [showLinkPage, setShowLinkPage] = useState(false)
    const [captachNumber, setCaptachNumber] = useState({ number1: 0, number2: 0, result: 0 })
    const [pop_window_status, setPopWindowStatus] = useState({ error: false, warning: false, success: false })
    const [decrypted, setDecrypted] = useState({ secret: secret_key, cipher: '', decrypted: ''})



    const changePage = () => {
        setPage({ start: true, writeMessage: false, readMessage: false })
    }
    
    const getMessageLink = (event) => {
        event.preventDefault()
    }

    const generateCaptchaNr = () => {
        const number1 = Math.floor(Math.random(1) * 10)
        const number2 = Math.floor(Math.random(1) * 10)

        setCaptachNumber({ ...captachNumber, number1: number1, number2: number2, result: number1 + number2 })
        // resetCaptcha()
    }

    const resetCaptcha = () => {
        const get_captacha_val = document.getElementById('pn_smart_captacha')
        get_captacha_val.value = ''
    }

    const showPopUp = (popUp_State) => {
        let get_pop_up_warning = document.getElementById('pn_error_pop_up')
        let get_pop_up_error = document.getElementById('pn_warning_pop_up')
        switch (popUp_State) {
            case "error":
                get_pop_up_warning.classList.remove('hidden')
                break;
            case "warning":
                get_pop_up_error.classList.remove('hidden')

                break;
            default:
                break;
        }
    }

    const closePopUp = (page) => {
        switch (page) {
            case "error":
                const get_pop_up_window = document.getElementById('pn_error_pop_up')
                get_pop_up_window.classList.add('hidden')
                break;
            case "warning":
                const get_pop_up_window2 = document.getElementById('pn_warning_pop_up')
                get_pop_up_window2.classList.add('hidden')
                break;
            case "success":
                const get_pop_up_window3 = document.getElementById('pn_success_pop_up') ?? null
                get_pop_up_window3.classList.add('hidden')
                break;
            default:
                break;
        }
    }


    const submit = async (e) => {
        e.preventDefault()
        let encryptMessage = HashGenerator.decryptMessage(message.message, secret_key)

        console.log(encryptMessage)
        if (message.message !== '' && message.message !== undefined && message.message !== null) {
            if (captachNumber.result === parseInt(message.pn_smart_captacha)) {
                setLoading(LoadingState.Active)
                const sendObj ={message:message,hashMessage:encryptMessage}
                axios.post(process.env.REACT_APP_BASE_URL_BACKEND + '/app-data/app-data.php', sendObj)
                    .then(res => {
                        setLink(res.data)
                        setLoading(LoadingState.Inactive)
                    })
                    .catch(err => {
                        console.log("Ein Fehler beim absenden der Linkdaten ist aufgetreten: ", err)
                        setLoading(LoadingState.Inactive)
                    })
                setShowLinkPage(true)
            } else {
                showPopUp('warning')
            }
        } else {
            showPopUp('error')
        }
    }


    return (
        <main>
            {!showLinkPage ?
                <CreateMessageLink changePage={changePage} getMessageLink={() => getMessageLink()} setMessge={setMessge} message={message} submit={submit} secret_key={secret_key} generateCaptchaNr={generateCaptchaNr} captachNumber={captachNumber} closePopUp={closePopUp} setPopWindowStatus={setPopWindowStatus} pop_window_status={pop_window_status} />
                :
                <ShowLink link_id={link} loading={loading} loadingText={loadingText} closePopUp={closePopUp} setPopUpState={setPopUpState} popUpState={popUpState} secret_key={secret_key} />
            }
        </main>

    )
}

export default WriteMessage