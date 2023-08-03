import React from 'react'

function ShowLink(props) {
  const { link_id } = props

  const copy_to_clipboard = () => {
    const copyText = document.getElementById("pn_copy_clip");
    if(copyText) {
      const link_copy = copyText.innerHTML
      navigator.clipboard.writeText(link_copy);
    }
  }

  return (
    <>
      <div className='pn_showLink--desc mb-4'>
        <h1 className='text-3xl mb-2'>Hier ist dein <span className='text-green-600 font-bold'>Geheimer Link</span> ,</h1>
        <h2 className='text-xl '>kopiere ihn und sende ihn an den Empfänger</h2>
      </div>
      <div className='px-4 py-10 bg-black/25 mb-8 relative'>
        <h2 className="font-bold">Dein Link:
          <br/> <span id="pn_copy_clip">http://localhost:3000/?id={link_id}</span>

        </h2>
        <div className='copy-icon absolute top-1 right-1 cursor-pointer' onClick={()=>copy_to_clipboard()}>
          <span className='text-2xl md:text-3xl' title="link kopieren">✂️</span>
        </div>
      </div>
      <div className='pn__button-group'>
        <a href={process.env.REACT_APP_BASE_URL} className='pn__btn rounded-lg pt-3'><span className='text-2xl md:text-3xl mt-8'>🏠</span> Zur Startseite zurück !</a>
      </div>
      
    </>
  )
}

export default ShowLink