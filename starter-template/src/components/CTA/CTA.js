import React from 'react'
import { useNavigate } from 'react-router-dom'

function CTA(props) {
    const {CTA_ID,ClassNames} = props
    const navigate = useNavigate()

return (
    <section id={`CTA-${CTA_ID}`}>
        <div className={ClassNames}>
            <h2 className='text-center font-bold'>Konnte ich ihr Intresse wecken?</h2>
            <h3 className='text-center font-bold'>Dann Kontieren Sie mich ganz einfach über mein Kontaktformular!</h3>
            <div className='text-center'>
                <button className='btn-red' onClick={()=>navigate('/contact-us')}>Kontaktformular</button>
            </div>
        </div>
    </section>
)}

export default CTA