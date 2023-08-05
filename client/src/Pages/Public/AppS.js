import React, { useEffect, useState } from 'react'
import Start from './Start'
import WriteMessage from './WriteMessage'
import ReadMessage from './ReadMessage'

function App() {

  const [page, setPage] = useState({start: true, writeMessage: false , readMessage: false})
  const [linkID, setLinkID] = useState({id:undefined})
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.href);
  let counter = 0

  useEffect(() => {
    if(counter === 0) {
      for (var p of searchParams) {
        if(p[0] === 'http://localhost:3000/?id' && p[1] !== "") {
          setLinkID({id: p[1]})
          setPage({start: false, writeMessage: false , readMessage: true})
          counter ++
        }
      }
    }
  }, [searchParams , counter]);

  const render_start = () => {
    if(page.start) {
      return <Start setPage={setPage} />
    }
  }

  const render_write_message = () => {
    if(page.writeMessage) {
      return <WriteMessage setPage={setPage}/>
    }
  }

  const render_read_message = () => {
    if(page.readMessage) {
      return <ReadMessage setPage={setPage} message_id={linkID}/>
    }
  }  

return (
  <div className="App ">
    { render_start() }
    { render_write_message()}
    { render_read_message()}
  </div>
)}

export default App
