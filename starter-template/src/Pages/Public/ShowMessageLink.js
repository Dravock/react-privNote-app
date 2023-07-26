import React from 'react'

function ShowLink(props) {
  const { message } = props

  return (
    <>
      <div className='pn_showLink--desc mb-4'>
        <h1 className='text-3xl mb-2'>Hier ist dein <span className='text-green-600 font-bold'>Geheimer Link</span> ,</h1>
        <h2 className='text-xl '>kopiere ihn und sende ihn an den Empfänger</h2>
      </div>
      <div className='p-4 bg-black/25 mb-8 relative'>
        <h2>Dein Link:
          <br/> http://localhost:3000/?id={message.message}
        </h2>
        <div className='copy-icon absolute top-1 right-1 cursor-pointer'>
          <span className='text-2xl md:text-3xl'>✂️</span>
        </div>
      </div>
      <div className='pn__button-group'>
        <a href={process.env.REACT_APP_BASE_URL} className='pn__btn rounded-lg pt-3'><span className='text-2xl md:text-3xl mt-8'>🏠</span> Zur Startseite zurück !</a>
      </div>
      
    </>
  )
}

export default ShowLink