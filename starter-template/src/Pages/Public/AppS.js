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
        if(p[0] === 'http://localhost:3000/?id') {
          setLinkID({id: p[1]})
          counter ++
        }
      }
    }
  }, []);

  console.log(linkID.id);



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
