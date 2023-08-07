import React, { useEffect, useState} from 'react'
import Content from '../../includes/enums/app/Content'
import PopUpInfo from '../../components/PopUpMeldung/PopUpInfo'

function CreateMessageLink(props) {
 
    const { changePage,message,setMessge,submit,generateCaptchaNr,captachNumber,closePopUp,secret_key} = props
    const [pageContent,setPageContent] = useState(Content.WriteMessage)
    const [checkboxPWState,setCheckboxPWState] = useState(false)
    const [checkboxMailState,setCheckboxMailState] = useState(false)
    const [detailOptions, setDetailOptions] = useState();

    useEffect(() => {
        generateCaptchaNr()
    }, [])

    useEffect(() => {
        getDetailOption()
    }, [])
    

    const inputListener = (e) => {
        const {name,value}=e.target
        setMessge({...message,[name]:value})
    }

    const optionsListener = (e) => {
        const {name,value}=e.target
        setMessge({...message,options:{...message.options,[name]:value}})

        checkboxListener(e)
    }

    const checkboxListener = (e) => {
        if(e.target.type === 'checkbox' && e.target.name === 'pn_pw_checkbox'){
            setCheckboxPWState(!checkboxPWState)
        }else if(e.target.type === 'checkbox' && e.target.name === 'pn_mail_checkbox'){
            setCheckboxMailState(!checkboxMailState)
        }
    }



    const getDetailOption = () => {
        let detailOptions_func_arr = []
        Object.keys(pageContent.details).forEach(function(key) {
            detailOptions_func_arr.push(<option value={key}>{pageContent.details[key]}</option>);
        });
        setDetailOptions(detailOptions_func_arr)
    }

    const toggleDetail = (e) => {
        const getDetails = document.querySelectorAll('details')
        getDetails.forEach(detail => {
            if(detail.open) {
                detail.removeAttribute('open')
        }})
    }

    return (
    <>
        <section className='description bg-gradient-to-b from-blue-500 to-blue-700 rounded-t-lg px-10 md:px-20 '>        
            <h1 className="text-2xl md:text-4xl py-4 font-bold ">{pageContent.header}</h1>
        </section>

        <PopUpInfo closePopUp={closePopUp} mode={"warning"}/>
        <PopUpInfo closePopUp={closePopUp} mode={"error"}/>


        <section className='pt-8 pb-8 mx-1 md:mx-8'>
            <form onSubmit={submit} className='pn__form'>
                {detailOptions && detailOptions.map((option,index) => {
                if(index === 0){
                    return  <section key={index} className='mb-8  flex justify-center' id={`pn_start_toggle-${index}`}>          
                                <details  className="bg-slate-300/50 shadow-xl rounded-t-lg w-full" open>
                                    <summary  className='bg-green-400 hover:bg-green-400/80 rounded-t-2xl shadow-xl py-1 sm:py-3 px-8 sm:px-8 ' onClick={(e)=>toggleDetail(e)} id={`summary-${index}`}>
                                        <h2 className='font-bold text-md sm:text-xl inset-6 '>{option.props.children.summary}</h2>
                                    </summary>
                                    <div className='border-2 border-r-green-400 border-l-green-400 border-b-green-400 border-t-green-400 '>
                                        <div className=''>
                                            <textarea className='pn__textarea w-full h-28 md:h-40  resize-none  ' name="message" placeholder='Gebe hier deine Nachricht ein...' onChange={inputListener}></textarea>
                                        </div>
                                        <div className='my-4 flex justify-center items-center'>
                                            <h3>{captachNumber.number1} + {captachNumber.number2}=</h3>
                                            <input type='number' placeholder='Lösung...' className='border ml-2 w-24' onChange={inputListener} name={"pn_smart_captacha"} id={"pn_smart_captacha"}/>
                                        </div>
                                    </div>
                                </details>
                            </section>
                }else{
                    return  <section key={index} className='mb-4 mt-8 flex justify-center' id={`pn_start_toggle-${index}`}>          
                                <details  className="   bg-slate-300/50 shadow-xl rounded-t-lg w-full">
                                    <summary  className='bg-green-400 hover:bg-green-400/80 rounded-t-2xl shadow-xl py-1 sm:py-3 px-8 sm:px-8' onClick={(e)=>toggleDetail(e)} id={`summary-${index}`}>
                                        <h2 className='font-bold text-md sm:text-xl'>{option.props.children.summary}</h2>
                                    </summary>
                                    <div className='grid border-2 border-r-green-400 border-l-green-400 border-b-green-400 border-t-green-400 px-4' >
                                        <span className='relative w-full h-full text-left flex items-end pt-4'>
                                            <input type='checkbox' className='w-5 h-5 cursor-pointer mr-2' name='pn_pw_checkbox' id='pn_pw_checkbox' onChange={optionsListener}  checked={checkboxPWState}/>
                                            <label htmlFor='pn_pw_checkbox' className='text-left font-bold'>Passwort verwenden?</label>
                                        </span>

                                        {checkboxPWState ? <span className='flex flex-col mt-4'>
                                                            
                                                            <input type='password' name='pn_pw' id='pn_pw' placeholder='Passwort hier hinterlegen' className='border-2 border-green-400' onChange={optionsListener}/>
                                                            <label htmlFor='pn_pw' className='text-left font-bold'>Passwort</label>
                                                        </span>: null
                                                        }
                                        {checkboxPWState ? <span className='flex flex-col mt-4'>
                                                            <input type='password' name='pn_pw_rep' id='pn_pw_rep' placeholder='Passwort bestätigen' className='border-2 border-green-400' onChange={optionsListener} />
                                                            <label htmlFor='pn_pw_rep' className='text-left font-bold'>Passwort Wiederholen</label>  

                                                        </span> : null
                                                        }
                                        <span className='flex flex-col mt-4'>
                                            <label className='text-left font-bold'>Speicherdauer</label>
                                            <select id="pn_delete_interval" className='' name="Speicherzeit" defaultValue={"4w"} onChange={optionsListener}>
                                                <option value={'1h'}>1h</option>
                                                <option value={'6h'}>6h</option>
                                                <option value={'24h'}>24h</option>
                                                <option value={'1w'}>1w</option>
                                            </select>
                                        </span>
                                        <span className='relative w-full h-full text-left flex items-end pt-4 pb-4'>
                                            <input type='checkbox' className='w-5 h-5 cursor-pointer mr-2' name='pn_mail_checkbox' id='pn_mail_checkbox' onChange={optionsListener}  checked={checkboxMailState} />
                                            <label htmlFor='pn_mail_checkbox' className='text-left font-bold'>Lesebestätigung</label>
                                        </span>
                                        {checkboxMailState ? <span className='flex flex-col mt-4 mb-4'>
                                                            <label htmlFor='pn_mail' className='text-left font-bold'>E-Mail Adresse:</label>
                                                            <input type="mail" name='pn_mail' id='pn_mail' placeholder='E-Mail Adresse hinterlegen' className='border-2 border-green-400' onChange={optionsListener}/>
                                                        </span>: null
                                                        }
                                    </div>
                                </details>
                            </section>
                    }
                })
            }
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