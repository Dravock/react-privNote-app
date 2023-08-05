import React, { useEffect, useState } from 'react'
import Start from './Start'
import WriteMessage from './WriteMessage'
import ReadMessage from './ReadMessage'
import Footer from '../../components/Footer/Footer'
import PopUp_Werbung from '../../components/WerbungPopUp/PopUp_Werbung'


function App() {

  const [page, setPage] = useState({start: true, writeMessage: false , readMessage: false})
  const [popUpState, setPopUpState] = useState(true)
  const [linkID, setLinkID] = useState({id:undefined})
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.href);
  let counter = 0

  useEffect(() => {
    
    if(counter === 0) {
      for (var p of searchParams) {
        if(p[0] === 'http://localhost:3000/?id' && p[1] !== "") {
          setLinkID({id: p[1]})
          setPage({...page,readMessage: true, start: false})
          counter ++  
        }else if(p[0] === 'http://localhost:3000/?response' && p[1] === "") {
          setPage({...page, writeMessage:true, start: false})
          counter ++  
        }
              
      }
    }
  }, []);

  const render_start = () => {
    if(page.start) {
      return <Start setPage={setPage} popUpState={popUpState} close_werbung={close_werbung} setPopUpState={setPopUpState} />
    }
  }

  const render_write_message = () => {
    if(page.writeMessage) {
      return <WriteMessage setPage={setPage} popUpState={popUpState} close_werbung={close_werbung} setPopUpState={setPopUpState} />
    }
  }

  const render_read_message = () => {
    if(page.readMessage) {
      return <ReadMessage setPage={setPage} page={page} message_id={linkID}  popUpState={popUpState} close_werbung={close_werbung} setPopUpState={setPopUpState} />
    }
  } 
  
  const render_werbung = () => {
    if(popUpState){
      return <PopUp_Werbung close_werbung={close_werbung}  />
    }
  }

  const close_werbung = () => {
    setPopUpState(false)
  }

return (
  <>
    {render_werbung()}
  <div className="App  md:mx-8">
    { render_start() }
    { render_write_message()}
    { render_read_message()}
  </div>
    <Footer />
  </>
)}

export default App
