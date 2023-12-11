import React from 'react';
import '../styles/Contact.scss';

const Contact =()=>{

    return(
        <div className='main'>
            <div className='topChild1'>
                <p className='leaf1'>Hire me !</p>
                <p className='leaf2'>I Believe in working with any organsization which have similar expectations, my passion and skills that would provide me with the opportunity to combine my professional expertise for making a difference</p>
            </div>
            <div className='topChild2'>
                <p className='leaf3'>Contact</p>
                <div className='icontainer'>
                    <a href='tel:+91 7738077856' className="sec1" target='_blank'>
                        <img src={'/icons/telephone.png'} alt='icon' id='icon'/>
                        <p className='text'>+91 7738077856 / 9321889742</p>
                    </a>
                    <a href='mailto:adityakachannel@gmail.com' className="sec1" target='_blank'>
                        <img src={'/icons/email.png'} alt='icon' id='icon'/>
                        <p className='text'>adityaprajapati2901@gmail.com</p>
                    </a>
                    <a href='https://wa.me/9321889742?text=Hello%20there!' className="sec1" target='_blank'>
                        <img src={'/icons/whatsapp.png'} alt='icon' id='icon'/>
                        <p className='text'>+91 9321889742 </p>
                    </a>
                    <a href='https://www.linkedin.com/in/aditya-prajapati-bbb64025a/' className="sec1" target='_blank'>
                        <img src={'/icons/linkedin.png'} alt='icon' id='icon'/>
                        <p className='text'>Aditya Prajapati</p>
                    </a>
                    <a href='https://github.com/adityaprajapati2901cukoobi' className="sec1" target='_blank'>
                        <img src={'/icons/social.png'} alt='icon' id='icon'/>
                        <p className='text'>8+ Repositries</p>                    
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Contact;
