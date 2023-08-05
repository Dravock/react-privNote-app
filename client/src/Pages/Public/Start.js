import React, { useEffect, useState } from 'react'
import Content from '../../includes/enums/app/Content.js'

function Start(props) {
    const { setPage } = props

    const [pageContent, setPageContent] = useState(Content.Startseite)
    const [detailOptions, setDetailOptions] = useState();


useEffect(() => {
    getDetailOption()
}, []);


const changePage = () => {
    setPage({start: false, writeMessage: true , readMessage: false})
}
    
const toggleDetail = (e) => {
    return
    const details = document.querySelectorAll('summary')
    details.forEach(detail => {

    })
}

const getDetailOption = () => {
    let detailOptions_test = []
    Object.keys(pageContent.details).forEach(function(key) {
        detailOptions_test.push(<option value={key}>{pageContent.details[key]}</option>);
    });

    setDetailOptions(detailOptions_test)

}



return (
<>
    <header className="bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center py-4 rounded-t-lg px-0 md:px-64">
        <h1 className='text-3xl font-bold'>{pageContent.header.part_1} <span className='font-bold text-green-400 inset-5'>{pageContent.header.part_2}</span></h1>
        <p className="mt-2">{pageContent.header.subHeader}</p>
    </header>

    <main className='sm:px-28 pt-8 text-left sm:text-center'>
        {detailOptions && detailOptions.map((option,index) => {
            return  <section key={index} className='mb-8 flex justify-center'>          
                        <details  className="   bg-slate-100/50 shadow-xl w-[22rem] sm:w-[35rem]">
                            <summary  className='bg-green-400  rounded-t-2xl shadow-xl px-4 sm:px-8' onClick={(e)=>toggleDetail(e)} name={`summary-${index}`}>
                                <h1 className='font-bold text-xl'>{option.props.children.summary}</h1>
                            </summary>
                            <div className='px-5 py-4'>
                                {option.props.children.text}
                            </div>
                        </details>
                    </section>
            })
            }
        <div className='text-center'>
            <button className="pn__btn--green" onClick={()=>changePage()}>
                Nachricht schreiben <span className='text-2xl'>🎉</span>
            </button>
        </div>
    </main>
</>
)
}

export default Start