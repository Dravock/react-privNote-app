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
    <header className="bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center py-4 rounded-t-lg px-0 s md:32 lg:px-52">
        <h1 className='text-2xl md:text-2xl mx-2 lg:text-3xl font-bold'>{pageContent.header.part_1} <span className='font-bold text-green-400 inset-5'>{pageContent.header.part_2}</span></h1>
        <p className="sm:text-sm mt-2 mx-4">{pageContent.header.subHeader}</p>
    </header>

    <main className='md:px-16 lg:px-28 pt-4 sm:pt-8 text-left sm:text-center'>
        {detailOptions && detailOptions.map((option,index) => {
            if(index === 0){
                return  <section key={index} className='mb-8 flex justify-center ' >          
                            <details  className="bg-slate-100/50 shadow-xl w-[19rem] sm:w-[35rem] " open>
                                <summary  className='bg-green-400 hover:bg-green-400/80 rounded-t-2xl shadow-xl py-3 px-8 sm:px-8 active' onClick={(e)=>toggleDetail(e)} id={`summary-${index}`}>
                                    <h2 className='font-bold text-md sm:text-xl inset-6 '>{option.props.children.summary}</h2>
                                </summary>
                                <div className='px-5 py-4'>
                                    <p className='text-left'>{option.props.children.text}</p>
                                </div>
                            </details>
                        </section>
            }else{
                return  <section key={index} className='mb-8 flex justify-center'>          
                            <details  className="   bg-slate-100/50 shadow-xl w-[19rem] sm:w-[35rem]">
                                <summary  className='bg-green-400 hover:bg-green-400/80 rounded-t-2xl shadow-xl sm:py-3 px-8 sm:px-8 no-active' onClick={(e)=>toggleDetail(e)} id={`summary-${index}`}>
                                    <h2 className='font-bold text-md sm:text-xl'>{option.props.children.summary}</h2>
                                </summary>
                                <div className='px-5 py-4'>
                                    <p className='text-left'>{option.props.children.text}</p>
                                </div>
                            </details>
                        </section>
                }
            })
        }
        <div className='flex justify-center items-center'>
            <button className="pn__btn rounded-lg mt-0 mb-4" onClick={()=>changePage()}>
                Nachricht schreiben <span className='text-xl md:text-2xl'>🎉</span>
            </button>
        </div>
    </main>
</>
)
}

export default Start