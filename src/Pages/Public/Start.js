import React, { useEffect, useState } from 'react'
import Content from '../../includes/enums/app/Content.js'

function Start(props) {
    const { setPage } = props

    const pageContent = Content.Startseite
    const [detailOptions, setDetailOptions] = useState();


useEffect(() => {
    getDetailOption()
}, []);


const changePage = () => {
    setPage({start: false, writeMessage: true , readMessage: false})
}
    
const toggleDetail = (e) => {
    const getDetails = document.querySelectorAll('details')
    getDetails.forEach(detail => {
        if(detail.open) {
            detail.removeAttribute('open')
    }})
}

const getDetailOption = () => {
    let detailOptions_func_arr = []
    Object.keys(pageContent.details).forEach(function(key) {
        detailOptions_func_arr.push(<option value={key}>{pageContent.details[key]}</option>);
    });
    setDetailOptions(detailOptions_func_arr)
}

return (
<>


    <main className='text-left sm:text-center'>
        <section id="pn_start_header ">
            <header className="bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center  rounded-t-lg px-0 s md:32 lg:px-52">
                <h1 className='text-2xl md:text-2xl mx-2 lg:text-3xl pt-2 font-bold'>{pageContent.header.part_1} <span className='font-bold text-green-400 inset-5'>{pageContent.header.part_2}</span></h1>
                <p className="sm:text-sm mt-2 pb-2 mx-4">{pageContent.header.subHeader}</p>
            </header>
        </section>
        
        <div id="pn_section_body" className='px-4 md:px-8'>
        {detailOptions && detailOptions.map((option,index) => {
            if(index === 0){
                return  <section key={index} className='mb-4 mt-12 flex justify-center' id={`pn_start_toggle-${index}`}>          
                            <details  className="bg-slate-300/50 shadow-xl rounded-t-lg w-full" open>
                                <summary  className='bg-green-400 hover:bg-green-400/80 rounded-t-2xl shadow-xl py-1 sm:py-3 px-8 sm:px-8 ' onClick={(e)=>toggleDetail(e)} id={`summary-${index}`}>
                                    <h2 className='font-bold text-md sm:text-xl inset-6 '>{option.props.children.summary}</h2>
                                </summary>
                                <div className='px-5 pt-6 pb-9 border-2 border-r-green-400 border-l-green-400 border-b-green-400 border-t-green-400'>
                                    <p className='text-left'>{option.props.children.text}</p>
                                </div>
                            </details>
                        </section>
            }else{
                return  <section key={index} className='mb-4 mt-4 flex justify-center' id={`pn_start_toggle-${index}`}>          
                            <details  className="   bg-slate-300/50 shadow-xl rounded-t-lg w-full">
                                <summary  className='bg-green-400 hover:bg-green-400/80 rounded-t-2xl shadow-xl py-1 sm:py-3 px-8 sm:px-8' onClick={(e)=>toggleDetail(e)} id={`summary-${index}`}>
                                    <h2 className='font-bold text-md sm:text-xl'>{option.props.children.summary}</h2>
                                </summary>
                                <div className='px-5 py-4 border-2 border-green-400/80'>
                                    <p className='text-left'>{option.props.children.text}</p>
                                </div>
                            </details>
                        </section>
                }
            })
        }
        </div>
        <section id="pn_start_btn">
            <div className='flex justify-center items-center max-h-screen'>
                <button className="pn__btn rounded-lg mt-0 mb-6" onClick={()=>changePage()}>
                    Nachricht schreiben <span className='text-xl md:text-2xl'>🎉</span>
                </button>
            </div>
        </section>
    </main>
</>
)
}

export default Start