import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Balatro from '../Reactbits/Balatro/Balatro'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import { useState, useRef } from 'react'
import music from './assets/mp3/background-music.mp3'
import { useTranslation } from 'react-i18next'
import './i18n'

function App() {
  const [vhs, setVhs] = useState(false)
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const { t } = useTranslation();

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div>
      <audio id='audio' ref={audioRef} loop>
        <source src={music} type='audio/mpeg' />
      </audio>
      <Balatro
        isRotate={false}
        mouseInteraction={false}
        pixelFilter={700}
        color1='#db8a42'
        color2='#000000'
        color3='#212121'
      />
      <button
        onClick={isPlaying ? handlePauseMusic : handlePlayMusic}
        style={{ position: 'fixed', right: 0, top: 0, zIndex: 1000 }}
      >
        {isPlaying ? t('app.musicOff') : t('app.musicOn')}
      </button>
      <button
        style={{ position: 'fixed', left: 0, top: 0, zIndex: 1000 }}
        onClick={() => setVhs(!vhs)}>{vhs ? "VHS OFF" : "VHS ON"}</button>
      <div className={vhs ? 'vhs-effect' : ''}>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <p className='credits'>© 2025 Tiago LABRO. Tous droits réservés.</p>
      </div>
    </div>
  )
}

export default App
