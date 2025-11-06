import React, { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import './OtherDeck.css'
import adobe from '../../../assets/img/cards/other-deck/adobe-joker.png'
import canva from '../../../assets/img/cards/other-deck/canva-joker.png'
import figma from '../../../assets/img/cards/other-deck/figma-joker.png'
import wordpress from '../../../assets/img/cards/other-deck/wordpress-joker.png'
import blender from '../../../assets/img/cards/other-deck/blender-joker.png'

function OtherDeck() {
    const tiltRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

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
        <div className='back-deck'>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[0]} data-tilt>
                    <img src={wordpress} alt="Joker Wordpress" />
                </div>
                <p>Wordpress</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[1]} data-tilt>
                    <img src={figma} alt="Joker Figma" />
                </div>
                <p>Figma</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[2]} data-tilt>
                    <img src={adobe} alt="Joker Suite Adobe" />
                </div>
                <p>Suite Adobe</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[3]} data-tilt>
                    <img src={canva} alt="Joker Canva" />
                </div>
                <p>Canva</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[4]} data-tilt>
                    <img src={blender} alt="Joker Blender" />
                </div>
                <p>Blender</p>
            </div>
        </div>
    )
}

export default OtherDeck