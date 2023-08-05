import React, { useEffect } from 'react'
import LoadingState from '../../includes/enums/LoadingState';
import LoadingScreen from '../../components/loading_spinner/Loadingscreen';

function ShowLink(props) {
  const { link_id,loading,loadingText } = props

  useEffect(() => {
    return
    if(loading === LoadingState.Active) {
      const getElement = document.getElementById("id-ShowMessageLink")
      getElement.classList.add('hidden')
    }
  }, [loading])
  

  const copy_to_clipboard = () => {
    
    const copyText = document.getElementById("pn_copy_clip");
    if(copyText) {
      const link_copy = copyText.value
      navigator.clipboard.writeText(link_copy);
      alert('\nLink wurde in die Zwischenablage kopiert:  \n\n'+ link_copy)
    }
  }

  return (
    <>
    {loading === LoadingState.Active && <LoadingScreen text={loadingText}/>}

      
      <div className='shadow-2xl px-4 pb-10 bg-black/25 mb-8 relative'>
        <div id="id-ShowMessageLink" className='pn_showLink--desc  py-12'>
          <h1 className='text-3xl mb-2 font-bold'>Hier ist dein <span className='text-green-600 font-bold'>Geheimer Link</span> ,</h1>
          <h2 className='text-xl '>Sende diesen Link an den Empfänger nach dem öffnen werden wird die Nachricht gelöscht</h2>
        </div>
        <h3 className="text-xl font-bold pt-4">Dein Link:</h3>
          <br/> 
          <div className="relative w-full">
            <input readOnly={true} value={ process.env.REACT_APP_BASE_URL_PARAM_ID + link_id} id="pn_copy_clip"  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" />
            <button  onClick={()=>copy_to_clipboard()} title="Link kopieren" className="absolute top-0 right-0 p-2.5 h-full pr-6 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kopieren <span className='absolute text-xl' >✂️</span></button>
          </div>
        <div className='copy-icon absolute top-1 right-1 cursor-pointer ' >
          
        </div>
      </div>
      <div className='pn__button-group  flex flex-col sm:flex-row mt-8'>
        <a href={process.env.REACT_APP_BASE_URL} className='pn__btn rounded-lg  flex justify-center align-middle relative pl-10' title="Startseite">
          <span className='absolute text-2xl md:text-3x top-0 left-2'>🏠</span> Zur Startseite zurück !
        </a>
        <a href={`whatsapp://send?text=${process.env.REACT_APP_BASE_URL_PARAM_ID+link_id}`} className="pn__btn rounded-lg flex justify-center align-middle relative pr-11" title="Auf WhatsApp teilen">
          Teilen über WhatsApp <span className='absolute text-2xl md:text-3x top-1 right-2'>🚀</span>
        </a>
      </div>
    </>
  )
}

export default ShowLink