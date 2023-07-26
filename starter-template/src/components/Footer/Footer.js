import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function Footer(props) {

  const { ClassNames } = props


return (
    <footer className={ClassNames}>
        <div className='sm:col-span-5'>
          <h3 className='footer-headlines text-left ml-5'>Company</h3>
          <ul className='text-left sm:ml-8'>
            <li className='mt-2'>Keskin Software Solution</li>
            <li >Sommerbergstraße 5</li>
            <li className='mb-6'>75387 Neubulach</li>
            <li className='mt-2'>Tel: <a className='text-blue-200' href="tel:07053 3346">07053 / 3346</a></li>
            <li className='mt-2'>E-Mail:<a className='text-blue-200' href="mailto:d.keskin@keskinsoftwaresolution"> D.Keskin@KeskinSoftwareSolution</a></li>
          </ul>
        </div>

        <div className='sm:col-span-5'>
          <h3 className='footer-headlines text-left'>Links</h3>
          <ul className='flex flex-col text-left sm:ml-5 pb-5'>
            <li ><a className='mt-2 hover-underline-animation' href="https://google.de">Contact Us</a></li>
            <li ><a className='mt-2 hover-underline-animation' href="https://google.de">Services</a></li>
            <li ><a className='mt-2 hover-underline-animation' href="https://google.de">Meine Projekte</a></li>
            <li ><a className='mt-2 hover-underline-animation' href="https://google.de">Impressum</a></li>
            <li ><a className='mt-2 hover-underline-animation' href="https://google.de">Datenschutz</a></li>
          </ul>
        </div>

        <div className='sm:col-span-1'>
          <h3 className='footer-headlines text-left'>Follow us</h3>
          <ul className='text-left sm:ml-5 pb-5'>
              <li ><a className='mt-2 hover-underline-animation' href="https://www.facebook.de">Facebook</a></li>
              <li className='mt-2 hover-underline-animation'><a href="https://www.instagram.de">Instagram</a></li>
              <li className='mt-2 hover-underline-animation'><a href="https://www.twitter.de" >Twitter</a></li>
              <li className='mt-2 hover-underline-animation'><a href="https://www.linkedin.de">LinkedIn</a></li>
          </ul>
        </div>
    </footer>
)}

export default Footer