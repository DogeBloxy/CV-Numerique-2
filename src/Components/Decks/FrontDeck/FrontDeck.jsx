import React, { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import './FrontDeck.css'
import bootstrap from '../../../assets/img/cards/front-deck/bootstrap-joker.png'
import css from '../../../assets/img/cards/front-deck/css-joker.png'
import html from '../../../assets/img/cards/front-deck/html-joker.png'
import js from '../../../assets/img/cards/front-deck/js-joker.png'
import react from '../../../assets/img/cards/front-deck/react-joker.png'
import sass from '../../../assets/img/cards/front-deck/sass-joker.png'
import vue from '../../../assets/img/cards/front-deck/vue-joker.png'

function FrontDeck() {
    const tiltRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

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
    })


    return (
        <div className='front-deck'>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[0]} data-tilt>
                    <img src={html} alt="Joker HTML" />
                </div>
                <p>HTML</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[1]} data-tilt>
                    <img src={css} alt="Joker CSS" />
                </div>
                <p>CSS</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[2]} data-tilt>
                    <img src={bootstrap} alt="Joker Bootstrap" />
                </div>
                <p>Bootstrap</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[3]} data-tilt>
                    <img src={sass} alt="Joker Sass" />
                </div>
                <p>Sass</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[4]} data-tilt>
                    <img src={js} alt="Joker JavaScript" />
                </div>
                <p>JavaScript</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[5]} data-tilt>
                    <img src={react} alt="Joker React" />
                </div>
                <p>React</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[6]} data-tilt>
                    <img src={vue} alt="Joker Vue.JS" />
                </div>
                <p>Vue.JS</p>
            </div>

        </div>
    )
}

export default FrontDeck