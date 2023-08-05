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
      return <ReadMessage setPage={setPage} page={page} message_id={linkID} />
    }
  }  

  const open_footer_mobile = () => {
    console.log('open_footer_mobile');
  }

return (
  <>
  <div className="App  md:mx-8">
    { render_start() }
    { render_write_message()}
    { render_read_message()}

  </div>
  <footer className='absolute bg-gradient-to-b from-blue-500 to-blue-700 bottom-0 left-0 w-full text-center flex flex-col'>
        <div className='animteFooter-height z-10'>
            <div className='w-full'>
              <h1 className='text-white text-lg underline font-bold hover:text-green-400 cursor-pointer'>Info</h1>
            </div>
            <div className='footer__content mt-2 mb-8'>
              <div className='col-span-3'>
              </div>
              <div className='col-span-3'>
                <h3 className='font-bold text-lg mb-2'>About Us</h3>
                <ul className='text-left pl-4 md:pl-16'>
                  <li>
                    <a>Wer wir sind</a>
                  </li>
                  <li>
                    <a>Technik</a>
                  </li>
                  <li>
                    <a>Nachweise</a>
                    </li>
                </ul>
              </div>
              <div className='col-span-3 mx-4'>
                <h3 className='font-bold text-lg mb-2'>Links</h3>
                <ul className='text-left pl-4 md:pl-16'>
                  <li>
                    <a>Impressum</a>
                  </li>
                  <li>
                    <a>Datenschutz</a>
                  </li>
                  <li>
                    <a>GitHub</a>
                  </li>
                </ul>
              </div>
              <div className='col-span-3'></div>
            </div>
        </div>

    </footer>
  </>
)}

export default App
