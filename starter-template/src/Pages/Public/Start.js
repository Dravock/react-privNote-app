import React from 'react'

function Start(props) {
    const { setPage } = props

    const changePage = () => {
        setPage({start: false, writeMessage: true , readMessage: false})
    }
    
    return (
        <>
        <h1 className="text-xl md:text-4xl mb-8">
            Willkommen bei <span className='font-bold text-green-600'>PrivateNachricht.de</span>!
        </h1>
        <p className="text-lg md:text-xl text-justify mb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p className='text-lg md:text-xl text-justify'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <div>
            <button className="pn__btn--green" onClick={()=>changePage()}>
                Nachricht schreiben <span className='text-2xl'>🎉</span>
            </button>
        </div>
    </>
    )
}

export default Start