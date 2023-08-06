import React from 'react'

function PopUp_Werbung(props) {
    const {close_werbung} = props

return (
    <section id="pn_pop_up_werbung">
        <div className='absolute top-0 left-0 z-[100] w-[100vw] h-[100vh] bg-black/30 flex justify-center items-center'>
            <div className='relative w-full h-full lg:w-[80%] lg:h-[80%] bg-white flex justify-center items-center'>
                <div className='absolute right-8 top-5'>
                    <button className='text-5xl cursor-pointer' onClick={() => close_werbung()}>X</button>
                </div>
                <h1 className='text-5xl '>Werbung</h1>
            </div>
        </div>
    </section>
)}

export default PopUp_Werbung