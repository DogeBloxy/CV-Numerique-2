import React, { useState } from 'react'
import './Skills.css'
import frontendDeck from '../../assets/img/cards/deck-image/frontend-deck.webp'
import backendDeck from '../../assets/img/cards/deck-image/backend-deck.webp'
import otherDeck from '../../assets/img/cards/deck-image/other-deck.webp'
import FrontDeck from '../Decks/FrontDeck/FrontDeck'
import BackDeck from '../Decks/BackDeck/BackDeck'
import OtherDeck from '../Decks/OtherDeck/OtherDeck'
import { useTranslation } from 'react-i18next'

function Skills() {
    const [deckChosen, setDeckChosen] = useState('');
    const { t } = useTranslation();

    return (
        <div id='skills' className='skills'>
            <h2>{t('skills.title')}</h2>
            <div className='skills-decks'>
                <div className='deck-content'>
                    <img src={frontendDeck} onClick={() => setDeckChosen('1')} alt="Deck Front-End" />
                    <p className={deckChosen === '1' ? 'selected' : ''}>{t('skills.frontend')}</p>
                </div>
                <div className='deck-content'>
                    <img src={backendDeck} onClick={() => setDeckChosen('2')} alt="Deck Back-End" />
                    <p className={deckChosen === '2' ? 'selected' : ''}>{t('skills.backend')}</p>
                </div>
                <div className='deck-content'>
                    <img src={otherDeck} onClick={() => setDeckChosen('3')} alt="Deck Autres" />
                    <p className={deckChosen === '3' ? 'selected' : ''}>{t('skills.other')}</p>
                </div>
            </div>
            <div className='skills-cards'>
                {deckChosen === '1' ? <FrontDeck />
                    :
                    deckChosen === '2' ? <BackDeck />
                        :
                        deckChosen === '3' ? <OtherDeck />
                            : ''}
            </div>
        </div>
    )
}

export default Skills