import React from 'react'
import FooterLinks from '../../includes/enums/app/FooterLinks'

function Footer() {


    const render_footer_links = (mode) => {
      switch (mode) {
        case 'about_us':
          return FooterLinks.links_1.map((item,index)=>{
            return (
              <li key={`about-us-link-${index}`} className='text-white text-sm hover:text-green-400 cursor-pointer' tabIndex={1}>
                <a >{item.name}</a>
              </li>
            )
          })
        case 'page-links':
          return FooterLinks.links_2.map((item,index)=>{
            return (
              <li key={`page-links-${index}`}  className='text-white text-sm hover:text-green-400 cursor-pointer' tabIndex={1}>
                <a >{item.name}</a>
              </li>
            )
          })
        default:
          break;
      }
  }


return (
  <footer className='absolute bg-gradient-to-b from-blue-500 to-blue-700 bottom-0 left-0 w-full text-center flex flex-col'>
        <div className='animteFooter-height z-10'>
            <div className='w-full'>
              <h1 className=' text-lg  font-bold text-green-400 cursor-pointer'>Info</h1>
            </div>
            <div className='footer__content mt-2 mb-8'>
              
              <div className='col-span-6'>
                <h3 className='font-bold text-lg mb-2 text-green-300'>About Us</h3>
                <ul className='text-left flex justify-center flex-col items-center'>
                  {render_footer_links('about_us')}
                </ul>
              </div>

              <div className='col-span-6  mx-4'>
                <h3 className='font-bold text-lg mb-2 text-green-300'>Links</h3>
                <ul className='text-left  flex justify-center flex-col items-center'>
                  {render_footer_links('page-links')}
                </ul>
              </div>
              
            </div>
        </div>

    </footer>
)}

export default Footer