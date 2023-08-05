import React, { useEffect, useState } from 'react'
import Content from '../../includes/enums/app/Content'

function CreateMessageLink(props) {
 
    const { changePage,getMessageLink ,message,setMessge,submit,generateCaptchaNr,captachNumber,closePopUp,pop_window_status} = props
    const [pageContent,setPageContent] = React.useState(Content.WriteMessage)

    useEffect(() => {
        generateCaptchaNr()
    }, [])
    

    const inputListener = (e) => {
        const {name,value}=e.target
        setMessge({...message,[name]:value})
    }

    return (
    <>
        <section className='description bg-gradient-to-b from-blue-500 to-blue-700 rounded-t-lg px-10 md:px-20 '>        
            <h1 className="text-2xl md:text-4xl py-4 font-bold ">{pageContent.header}</h1>
        </section>

        <section id="pn_error_pop_up" className='pb-8 hidden'>
            <div className='h-full w-full bg-red-600 flex justify-center items-center'>
                <h2 className='text-xl md:text-3xl font-bold px-4 md:px-8 pb-4 pt-4'>Du kannst keine Leere Nachricht erstellen!</h2>
                <button className='text-4xl cursor-pointer font-extrabold' onClick={()=>closePopUp("error")}>X</button>
            </div>
        </section>


        <section id="pn_warning_pop_up" className='pb-8 hidden'>
            <div className='h-full w-full bg-yellow-600 flex justify-center items-center'>
                <h2 className='text-xl md:text-3xl font-bold px-4 md:px-8 pb-4 pt-4'>Authentifikation fehlgelschagen nochmal versuchen</h2>
                <button className='text-4xl cursor-pointer font-extrabold' onClick={()=>closePopUp("warning")}>X</button>
            </div>
        </section>

        <section className='pt-8 pb-8'>
            <form onSubmit={submit} className='pn__form'>
                <div className='pn-text-field-box mx-8'>
                    <textarea className='pn__textarea w-full rounded-lg border-4 border-green-600/50 resize-none h-40 focus:border-green-400' name="message" placeholder='Gebe hier deine Nachricht ein...' onChange={inputListener}></textarea>
                </div>
                <div className='my-4 flex justify-center items-center'>
                    <h3>{captachNumber.number1} + {captachNumber.number2}=</h3>
                    <input type='number' placeholder='Wie lautet die Antwort' className='border ml-2 pl-2' onChange={inputListener} name={"pn_smart_captacha"} id={"pn_smart_captacha"}/>
                </div>
                <div className='pn__button-group grid grid-cols-12 gap-x-4'>
                    <button  className="order-last sm:order-first col-span-12 sm:col-span-6 mt-6 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg mx-2 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50" onClick={()=>changePage()}>
                        <span className='relative text-xl font-bold pl-7'><span className='text-xl absolute top-0 left-0'>🔙</span> Zurück</span>
                    </button>
                    
                    <button type='submit' className= "col-span-12 sm:col-span-6 mt-6 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg mx-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50" onClick={submit}>
                        <span className='relative text-xl font-bold pl-7'><span className='text-xl absolute top-0 left-0'>📝</span>Geheim Nachricht erstellen </span>
                    </button>
                </div>
            </form>
        </section>  
    </> 
    )
}

export default CreateMessageLink