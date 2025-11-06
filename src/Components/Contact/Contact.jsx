import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './Contact.css'
import { useTranslation } from 'react-i18next'

function Contact() {
    const { t } = useTranslation();
    return (
        <div id='contact' className='contact'>
            <h2>{t('contact.title')}</h2>
            <div className='contact-list'>
                <a className='contact-link' href="mailto:labrotiago@gmail.com"><IoMdMail /></a>
                <a className='contact-link' target='_blank' href="https://www.linkedin.com/in/tiago-labro-31479029b/"><FaLinkedin /></a>
                <a className='contact-link' target='_blank'  href="https://github.com/DogeBloxy"><FaGithub /></a>
            </div>
        </div>
    )
}

export default Contact