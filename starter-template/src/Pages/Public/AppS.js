import React, { useState } from 'react'
import Start from './Start'
import WriteMessage from './WriteMessage'
import ReadMessage from './ReadMessage'

function App() {

  const [page, setPage] = useState({start: true, writeMessage: false , readMessage: false})
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.href);

  for (const p of searchParams) {
    console.log(p);
  }
  



  return (
    <div className="App container">
      {
        page.start ? <Start setPage={setPage} />
        : null 
      }
      {
        page.writeMessage ? <WriteMessage setPage={setPage}/>
        : null 
      }
      {
        page.readMessage ? <ReadMessage setPage={setPage}/>
        : null 
      }

    </div>
  )
}

export default App
