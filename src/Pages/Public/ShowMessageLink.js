import React, { useEffect, useState } from 'react'
import LoadingState from '../../includes/enums/LoadingState';
import LoadingScreen from '../../components/loading_spinner/Loadingscreen';
import Content from '../../includes/enums/app/Content';

function ShowLink(props) {
  const { link_id,loading,loadingText ,closePopUp,  setPopUpState } = props

  const [pageContent,setPageContent] = useState(Content.ShowMessageURL)
  const secret_key = link_id.key
  const message_id = link_id.data

  const whatsappLink = "whatsapp://send?text="+process.env.REACT_APP_BASE_URL_PARAM_ID_EQUAL + message_id+"&key="+secret_key

  console.log(whatsappLink)


  useEffect(() => {
    setPopUpState(true)
}, [setPopUpState]);

  const copy_to_clipboard = () => {
    const copyText = document.getElementById("pn_copy_clip");

    if(copyText) {
      const get_pop_up_window = document.getElementById('pn_success_pop_up')
      const link_copy = copyText.value
      navigator.clipboard.writeText(link_copy);
      get_pop_up_window.classList.remove('hidden')
    }
  }

  return (
    <>
    {loading === LoadingState.Active && <LoadingScreen text={loadingText}/>}
      <div className='relative  shadow-2xl   '>
        <section className=''>        
          <div id="id-ShowMessageLink" className='pt-2 pb-8 px-4 rounded-t-lg pn_showLink--desc  bg-gradient-to-b from-blue-500 to-blue-700'>
            <h1 className='text-2xl sm:text-3xl mb-2 font-bold text-white mt-4'>{pageContent.header_part_1}<span className='text-green-400 font-bold'>{pageContent.header_part_2}</span></h1>
            <h2 className='text-lg sm:text-xl mx-8 text-justify lg:text-center'>{pageContent.subHeader}</h2>
          </div>
        </section>

        <section id="pn_success_pop_up" className=' hidden'>
            <div className='relative h-full w-full bg-green-500 flex justify-center items-center'>
                <h2 className='text-lg md:text-1xl font-bold px-4 md:px-8 pb-4 pt-4 text-white'>Link in Zwischenablage kopiert</h2>
                <button className='absolute right-10 text-3xl cursor-pointer  text-white' onClick={()=>closePopUp("success")} >X</button>
            </div>
        </section>

        <section className='px-4 md:px-8 mb-12 mt-8'>
          <h3 className="text-xl font-bold mb-2">Dein Link:</h3>
          <div className="relative w-full bg-black/25">
            <input readOnly={true} value={ process.env.REACT_APP_BASE_URL_PARAM_ID_EQUAL + message_id+"&key="+secret_key} id="pn_copy_clip"  className="block p-2.5 w-full z-20 text-sm text-gray-900  rounded-r-lg border-green-500 border-l-2 border-4  focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" />
            {/*<input readOnly={true} value={ process.env.REACT_APP_BASE_URL_PARAM_ID_EQUAL + link_id+"&key="+secret_key} id="pn_copy_clip"  className="block p-2.5 w-full z-20 text-sm text-gray-900  rounded-r-lg border-green-500 border-l-2 border-4  focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" /> */}
            <button  onClick={()=>copy_to_clipboard()} title="Link kopieren" className="absolute top-0 right-0 p-2.5 h-full pr-10 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Kopieren <span className='absolute text-xl top-1 right-2'>✂️</span>
            </button>
          </div>
        </section>

        <section className='px-4 md:px-8'>
          <div className='pn__button-group w-full grid grid-cols-12 gap-1  gap-y-2 pb-8'>
              <a href={process.env.REACT_APP_BASE_URL} className='mx-auto w-fit md:w-full pn__btn rounded-lg col-span-12 md:col-span-6 flex justify-center align-middle relative pr-10  sm:pl-10 ' title="Startseite">
                <span className='absolute text-2xl md:text-3x top-0 md:top-0 right-2 md:right-12'>🏠</span> Zur Startseite zurück !
              </a>
              <a href={whatsappLink} className="mx-auto w-fit md:w-full order-first md:order-last col-span-12 md:col-span-6 pn__btn bg-[#4FCE5D] hover:bg-[#58d066d2] rounded-lg flex justify-center align-middle relative pr-10 sm:pr-14" title="Auf WhatsApp teilen">
                Teilen über WhatsApp! <span className='absolute text-2xl md:text-3x top-1 md:top-1 right-2 md:right-[5.5rem] lg:right-24'>🚀</span>
              </a>
            </div>
        </section>
      </div>
    </>
  )
}

export default ShowLink