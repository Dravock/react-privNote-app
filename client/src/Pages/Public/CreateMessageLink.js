import React, { useEffect} from 'react'
import Content from '../../includes/enums/app/Content'
import PopUpInfo from '../../components/PopUpMeldung/PopUpInfo'

function CreateMessageLink(props) {
 
    const { changePage,message,setMessge,submit,generateCaptchaNr,captachNumber,closePopUp} = props
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

        <PopUpInfo closePopUp={closePopUp} mode={"warning"}/>
        <PopUpInfo closePopUp={closePopUp} mode={"error"}/>


        <section className='pt-8 pb-8'>
            <form onSubmit={submit} className='pn__form'>
                
                    <section  className='  flex justify-center' >          
                        <details  className="bg-slate-300/50 shadow-xl rounded-t-lg w-full h-full" open>
                            <summary  className='bg-green-400 hover:bg-green-400/80 rounded-t-2xl shadow-xl py-1 sm:py-3 px-8 sm:px-8 '>
                                <h2 className='font-bold text-md sm:text-xl inset-6 '>tgdhjrte</h2>
                            </summary>
                            <div className='border-2 border-r-green-400 border-l-green-400 border-b-green-400 border-t-green-400'>
                                <div className=''>
                                    <textarea className='pn__textarea w-full h-28 md:h-40  resize-none  focus:border-green-400' name="message" placeholder='Gebe hier deine Nachricht ein...' onChange={inputListener}></textarea>
                                </div>
                                <div className='my-4 flex justify-center items-center'>
                                    <h3>{captachNumber.number1} + {captachNumber.number2}=</h3>
                                    <input type='number' placeholder='Lösung...' className='border ml-2 w-24' onChange={inputListener} name={"pn_smart_captacha"} id={"pn_smart_captacha"}/>
                                </div>
                            </div>
                        </details>
                    </section>
                
                <section>
                    <div className='pn__button-group grid grid-cols-12 gap-x-4'>
                        <button  className="order-last sm:order-first col-span-12 sm:col-span-6 mt-6 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg mx-2 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50" onClick={()=>changePage()}>
                            <span className='relative text-xl font-bold pl-7'><span className='text-xl absolute top-0 left-0'>🔙</span> Zurück</span>
                        </button>
                        
                        <button type='submit' className= "col-span-12 sm:col-span-6 mt-6 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg mx-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50" onClick={submit}>
                            <span className='relative text-xl font-bold pl-7'><span className='text-xl absolute top-0 left-0'>📝</span>Geheim Nachricht erstellen </span>
                        </button>
                    </div>
                </section>
            </form>
        </section>  
    </> 
    )
}

export default CreateMessageLink