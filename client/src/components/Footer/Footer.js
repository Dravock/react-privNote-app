import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(props) {

  const { ClassNames } = props


return (
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
)}

export default Footer