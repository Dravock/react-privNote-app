import React from 'react'


function Hero(props) {
    const { imgSRC,text,space } = props

return (
    <section id="HeroBanner" className={space}>
        <div style={{backgroundImage:`url(${imgSRC})`}} className="relative hero-banner">
            <div className='absolute bottom-5 sm:bottom-10 bg-black/80 w-fit  ml-4 px-4'>
                <h2 className='text-xs sm:text-xl font-bold text-white'>{text}</h2>
            </div>
        </div>
    </section>
)}

export default Hero