import React, { useState } from 'react'

import './Timer.scss'

interface timerPropsType {
  title: string
  time: number
  isActive: boolean
}

const Timer: React.FC<timerPropsType> = ({
  title = 'Timer title',
  time = 0,
  isActive = false,
}: timerPropsType) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [timerActive, setTimerActive] = useState<boolean>(false)
  const [second, setSecond] = useState<number>(0)

  const menuButtonClickHandler = (event) => {
    setMenuOpen(!menuOpen)
  }

  const pauseButtonClickHandler = () => {
    console.log('pauseButtonClickHandler')
  }

  const formatTimerText = (second: number) => {
    var date = new Date(0)
    date.setSeconds(second)
    return date.toISOString().substr(11, 8).toString()
  }

  return (
    <div className="timer">
      <div className="timer__body">
        <div className="title__block" onClick={menuButtonClickHandler}>
          <span className="title">{title}</span>{' '}
          <span className="menu_button">{menuOpen ? 'X' : 'O'}</span>
        </div>
        <div className="time__block" onClick={pauseButtonClickHandler}>
          <span className="timer__play-icon"> {!timerActive ? '>' : '||'}</span>
          <span className="time">{formatTimerText(second)}</span>
        </div>
        {menuOpen ? (
          <div className="menu">
            <div className="menu__restart">
              <span>R</span> restart
            </div>
            <div className="menu__delete">
              <span>X</span> delete
            </div>
            <div className="menu__options">
              <span>O</span> options
            </div>
          </div>
        ) : null}
      </div>

      <div className="timer__bar">
        <div className="timer__line"></div>
      </div>
    </div>
  )
}

export default Timer
