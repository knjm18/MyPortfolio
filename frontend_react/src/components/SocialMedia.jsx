import React from 'react';
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div style={{ cursor: 'pointer'}}><a href='https://twitter.com/Knjm_18'><BsTwitter/></a></div>
        <div style={{ cursor: 'pointer'}}><a href='https://www.instagram.com/jevn_mvrc18/'><BsInstagram/></a></div>
        <div style={{ cursor: 'pointer'}}><a href='https://api.whatsapp.com/send/?phone=%2B2250768910092&text&type=phone_number&app_absent=0'><FaWhatsapp/></a></div>
    </div>
  )
}

export default SocialMedia