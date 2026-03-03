import React, { useState } from 'react'
import './Navbar.css'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('fr');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='navbar'>
      <ul className='navbar-menu'>
        <li className='navbar-item'><a href="#about-me" onClick={e => {
          setTimeout(() => {
            window.history.replaceState(null, '', window.location.pathname);
          }, 500);
        }}>{t('navbar.about')}</a></li>
        <li className='navbar-item'><a href="#skills" onClick={e => {
          setTimeout(() => {
            window.history.replaceState(null, '', window.location.pathname);
          }, 500);
        }}>{t('navbar.skills')}</a></li>
        <li className='navbar-item'><a href="#projects" onClick={e => {
          setTimeout(() => {
            window.history.replaceState(null, '', window.location.pathname);
          }, 500);
        }}>{t('navbar.projects')}</a></li>
      </ul>
      <div className='navbar-contact'><a href="#contact" onClick={e => {
        setTimeout(() => {
          window.history.replaceState(null, '', window.location.pathname);
        }, 500);
      }}>{t('navbar.contact')}</a></div>
      <div className='navbar-lang'>
        <button className={lang === 'fr' ? 'selected' : ''} onClick={() => {
          changeLanguage('fr');
          setLang('fr')
        }}>FR</button>
        <button className={lang === 'en' ? 'selected' : ''} onClick={() => {
          changeLanguage('en');
          setLang('en')
        }}>EN</button>
      </div>
    </div>
  )
}

export default Navbar