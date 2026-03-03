import React, { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import './BackDeck.css'
import docker from '../../../assets/img/cards/back-deck/docker-joker.png'
import java from '../../../assets/img/cards/back-deck/java-joker.png'
import mysql from '../../../assets/img/cards/back-deck/mysql-joker.png'
import nodejs from '../../../assets/img/cards/back-deck/nodejs-joker.png'
import php from '../../../assets/img/cards/back-deck/php-joker.png'
import python from '../../../assets/img/cards/back-deck/python-joker.png'
import symfony from '../../../assets/img/cards/back-deck/symfony-joker.png'

function BackDeck() {
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
        <div className='back-deck'>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[0]} data-tilt>
                    <img src={docker} alt="Joker Docker" />
                </div>
                <p>Docker</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[1]} data-tilt>
                    <img src={mysql} alt="Joker MySQL" />
                </div>
                <p>MySQL</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[2]} data-tilt>
                    <img src={php} alt="Joker PHP" />
                </div>
                <p>PHP</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[3]} data-tilt>
                    <img src={nodejs} alt="Joker Node.JS" />
                </div>
                <p>Node.JS</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[4]} data-tilt>
                    <img src={python} alt="Joker Python" />
                </div>
                <p>Python</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[5]} data-tilt>
                    <img src={symfony} alt="Joker Symfony" />
                </div>
                <p>Symfony</p>
            </div>
            <div className='card'>
                <div className='tilt-card' ref={tiltRefs[6]} data-tilt>
                    <img src={java} alt="Joker Java" />
                </div>
                <p>Java</p>
            </div>

        </div>
    )
}

export default BackDeck