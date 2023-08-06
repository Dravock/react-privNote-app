import React from 'react'

function ToggleBox() {
  return (
    <section  className='mb-4 mt-12 flex justify-center' id={""}>          
        <details  className="bg-slate-300/50 shadow-xl rounded-t-lg w-full" open>
            <summary  className='bg-green-400 hover:bg-green-400/80 rounded-t-2xl shadow-xl py-1 sm:py-3 px-8 sm:px-8 ' onClick={(e)=>toggleDetail(e)} id={`summary-${index}`}>
                <h2 className='font-bold text-md sm:text-xl inset-6 '>{option.props.children.summary}</h2>
            </summary>
            <div className='px-5 pt-6 pb-9 border-2 border-r-green-400 border-l-green-400 border-b-green-400 border-t-green-400'>
                <p className='text-left'>{option.props.children.text}</p>
            </div>
        </details>
    </section>
  )
}

export default ToggleBox