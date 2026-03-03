import React, { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import TiagoJoker from '../../assets/img/cards/tiago-joker.png'
import CV from '../../assets/pdf/cv-alternance-tiago-labro.pdf'
import './Hero.css'
import { useTranslation, Trans } from 'react-i18next'

function Hero() {
    const tiltRef = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 25,
                speed: 400,
                reverse: true
            })
        }

        return () => {
            if (tiltRef.current && tiltRef.current.vanillaTilt) {
                tiltRef.current.vanillaTilt.destroy();
            }
        }
    }, [])


    return (
        <div id='about-me' className='hero'>
            <div ref={tiltRef} data-tilt>
                <img src={TiagoJoker} alt="Joker" />
            </div>
            <div className='hero-intro'>
                <h1>{t('hero.title')}</h1>
                <div className='hero-content'>
                    <h2><Trans i18nKey="hero.subtitle" components={{blue: <span className='blue' />, red: <span className='red' />}}></Trans></h2>
                    <p><Trans i18nKey="hero.description"><i></i></Trans></p>
                </div>
                <div className='hero-resume'><h3><a href={CV} target='_blank'>{t('hero.resume')}</a></h3></div>
            </div>
            
        </div>
    )
}

export default Hero