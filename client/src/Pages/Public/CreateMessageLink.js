import React, { useState } from 'react'

function CreateMessageLink(props) {
    const { changePage,getMessageLink ,message,setMessge} = props


    const inputListener = (e) => {
        const {name,value}=e.target
        setMessge({...message,[name]:value})
    }


    return (
    <div>
        <div className='pn__button-group mb-8 text-left'>
            <button className="pn__btn--red rounded-xl px-4 font-bold" onClick={()=>changePage()}><span className='text-xl'>🔙Zurück</span></button>
        </div>
        <div className='description mb-8'>
            <h1 className="text-2xl md:text-4xl mb-8 font-bold">Legen wir los mit deiner Nachricht 😁</h1>
        </div>
        <form className='pn__form'>
            <textarea className='pn__textarea w-full rounded-lg border-4 border-green-600/50 resize-none h-40 focus:border-green-400' name="message" placeholder='Deine Nachricht' onChange={inputListener}></textarea>
            <button className="pn__btn--green ml-0 mt-8" onClick={()=>getMessageLink()}>
                Geheim Nachricht erstellen <span className='text-xl'>📝</span>
            </button>
        </form>
    </div> 
    )
}

export default CreateMessageLink