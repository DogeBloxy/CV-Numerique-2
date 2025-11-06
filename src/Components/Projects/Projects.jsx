import React, { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import './Projects.css'
import bonAppetit from '../../assets/img/bon-appetit.png'
import alloMovies from '../../assets/img/allomovies.png'
import shifumi from '../../assets/img/shifumi.png'
import samusocial from '../../assets/img/samusocialparis.jpg'
import popcornFlix from '../../assets/img/logo-popcornflix.png'
import bloxyDay from '../../assets/img/bloxy-day.png'
import { useTranslation } from 'react-i18next'

function Projects() {
    const { t } = useTranslation();
    const tiltRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        tiltRefs.forEach(ref => {
            if (ref.current) {
                VanillaTilt.init(ref.current, {
                    max: 25,
                    speed: 400,
                    reverse: true
                })
            }
        })

        return () => {
            tiltRefs.forEach(ref => {
                if (ref.current && ref.current.vanillaTilt) {
                    ref.current.vanillaTilt.destroy();
                }
            })
        }
    }, [])


    return (
        <div id='projects' className='projects'>
            <h2>{t('projects.title')}</h2>
            <div className='projects-cards'>
                <div className='card'>
                    <a href="https://dogebloxy.github.io/Bon-app-tit/site_bon_appetit.html" target='_blank'>
                        <div className='project-tilt-card' ref={tiltRefs[0]} data-tilt>
                            <img src={bonAppetit} alt="Bon Appetit" />
                            <div className='project-description'>
                                <p>{t('projects.bonappetit')}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='card'>
                    <a href="https://lavignechappazflorian.github.io/allomovies/" target='_blank'>
                        <div className='project-tilt-card' ref={tiltRefs[1]} data-tilt>
                            <img src={alloMovies} alt="Allo Movies" />
                            <div className='project-description'>
                                <p>{t('projects.allomovies')}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='card'>
                    <a href="https://lavignechappazflorian.github.io/shifumi-game/" target='_blank'>
                        <div className='project-tilt-card' ref={tiltRefs[2]} data-tilt>
                            <img src={shifumi} alt="Shifumi" />
                            <div className='project-description'>
                                <p>{t('projects.shifumi')}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='card'>
                    <a href="https://descorsiers.github.io/Brief_creatif_SAMUSOCIALPARIS/" target='_blank'>
                        <div className='project-tilt-card' ref={tiltRefs[3]} data-tilt>
                            <img src={samusocial} alt="SamuSocialParis" />
                            <div className='project-description'>
                                <p>{t('projects.samusocial')}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='card'>
                    <a href="https://popcornflix-project.netlify.app/" target='_blank'>
                        <div className='project-tilt-card' ref={tiltRefs[4]} data-tilt>
                            <img src={popcornFlix} alt="PopCornFlix" />
                            <div className='project-description'>
                                <p>{t('projects.popcornflix')}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='card'>
                    <a href="https://mega.nz/file/KkUQyIKa#3DUeyXUhqLyyY9ZE9e6RqssKBYgVJrGczzrOgY8Q5N8" target='_blank'>
                        <div className='project-tilt-card' ref={tiltRefs[5]} data-tilt>
                            <img src={bloxyDay} alt="Bloxy's Day" />
                            <div className='project-description'>
                                <p>{t('projects.bloxyday')} <br /> {t('projects.download')}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects