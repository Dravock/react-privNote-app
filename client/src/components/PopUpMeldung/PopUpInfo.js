import React from 'react'

function PopUpInfo(props) {
    const  {closePopUp, mode} = props


    const render_pop_up = (mode) => {
        switch (mode) {
            case "error":
                return <section id="pn_error_pop_up" className='pb-8 hidden'>
                            <div className='relative h-full w-full bg-red-600 flex justify-center items-center'>
                                <h2 className='text-xl md:text-3xl  px-4 md:px-8 pb-4 pt-4'>Du kannst keine Leere Nachricht erstellen!</h2>
                                <button className='font-bold right-5 top-3 absolute  text-4xl cursor-pointer ' title='close pop up banner' onClick={()=>closePopUp("error")}>X</button>
                            </div>
                        </section>
            case "warning":
                return <section id="pn_warning_pop_up" className='pb-8 hidden'>
                            <div className='relative h-full w-full bg-yellow-600 flex justify-center items-center'>
                                <h2 className='text-xl md:text-3xl  px-4 md:px-8 pb-4 pt-4'>Authentifikation fehlgelschagen nochmal versuchen</h2>
                                <button className='font-bold right-4 top-4 absolute text-4xl cursor-pointer ' title='close pop up banner' onClick={()=>closePopUp("warning")}>X</button>
                            </div>
                        </section>
            case "success":
                break;
            default:
                break;
        }
    }

return (
    <>
        {mode === "error" && render_pop_up(mode)}
        {mode === "warning" && render_pop_up(mode)}
        {mode === "success" && render_pop_up(mode)}
    </>

)}

export default PopUpInfo