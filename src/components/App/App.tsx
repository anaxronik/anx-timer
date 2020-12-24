import React from 'react'
import Timer from '../Timer/Timer'

import './App.scss'

export default function App() {
  return (
    <div className="app">
      <Timer title="Название таймера 1" time={412} isActive={false} />
      <Timer title="Название таймера 1" time={412} isActive={false} />
      <Timer title="Название таймера 1" time={412} isActive={false} />
    </div>
  )
}
