import React from 'react'

export default function StartScreen() {
  return (
    <div className='start-screen'>
      <h1>Hello Gamers, Welcome to Deezer Rhythm Run</h1>
      <p>
      Deezer Rhythm Run is a music matching game where you must match discs to the rhythm of the music.
        Get ready for a rhythm-filled challenge!
      </p>
      <div className='btn-container'>
        <button className='start-btn'>Start Game</button>
      </div>
    </div>
  )
}
