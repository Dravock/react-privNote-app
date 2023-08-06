import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Logo from '../../includes/img/png/KeskinCoding-OhneBG.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {

    const cookies = new Cookies()
    const navigate = useNavigate()

    const navbarLinks = [
        { title:"Home",url:"/" },
        { title:"Meine Projekte",url:"/meine-projekte" },
        { title:"Services",url:"/services" },
        { title:"Contact Us",url:"/contact-us" },
    ]


const logout =()=>{
    cookies.remove('token', { path: '/todo-app' });
    cookies.remove('token', { path: '/' });
    navigate('/')
}

const openMobileNav =()=>{
    const navOpen = document.getElementById("mobile-nav-open")
    const body = document.body
    body.classList.add("overflow-hidden")
    navOpen.classList.add("block")
    navOpen.classList.remove("hidden")
}

const closeMobileNav =()=>{
    const navOpen = document.getElementById("mobile-nav-open")
    const body = document.body
    body.classList.remove("overflow-hidden")
    navOpen.classList.add("hidden")
    navOpen.classList.remove("block")
}

return (
    <section id="Navbar">
        <div className='flex justify-between  bg-blue-500/40'>
            <div className='flex items-center'>
                <img src={Logo} width={"80px"} height={"80px"} alt="company-logo" className='p-1'/>
                <h3 className='font-bold md:text-2xl italic '>Keskin Software <br/> <span className='ml-10 '>Solution</span></h3>
            </div>
            <div className=''>
                
            </div>
            <div className=' flex pb-2'>
                <div className='sm:hidden mt-3 mr-4 cursor-pointer' >
                    <FontAwesomeIcon icon={faBars} className="absolute right-3 top-3 text-black justify-end" size='3x' onClick={()=>openMobileNav()}/>

                </div>
                <div id="mobile-nav-open" className='absolute h-[101%]  bg-black/95 z-30 top-0 right-0 w-full hidden'>
                    <div className='flex justify-center'>
                        <h2 className=' text-white  text-2xl font-bold mt-4 '>KSS</h2>
                        <FontAwesomeIcon icon={faXmark} className="absolute right-7 top-2 text-white justify-end cursor-pointer" size='3x' onClick={()=>closeMobileNav()}/>
                    </div>
                    <div className='grid grid-cols-12 text-white mt-20'>
                        {navbarLinks && navbarLinks.map(({title,url},index) =>
                            <a href={baseURL+url}  className='col-span-full py-6 text-lg md:text-xl font-bold mx-2'  key={index}>{title}</a>
                        )}
                    </div>
                </div>

                <div id="desktop-nav-bar" className='hidden sm:flex  mt-8 '>     
                        {navbarLinks && navbarLinks.map(({title,url},index)=>
                            <a href={baseURL+url} className='col-span-full text-lg md:text-xl font-bold mx-2 hover-underline-animation'  key={index}>{title}</a>
                        )}
                </div>
            </div>
        </div>
    </section>
)}

export default Header