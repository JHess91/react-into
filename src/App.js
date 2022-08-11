import { useState } from 'react'

import './App.css'
import ColorComp from './components/color'
import CounterComp from './components/Counter'
import CompWithFragment from './components/WithFragment'
import SuperSimpleComp from './components/SuperSimple'



function App() {
  return (
    <div className="App-header">
    <ColorComp />
    <CounterComp />
    <SuperSimpleComp />
    <CompWithFragment />
    </div>
  )
}

export default App
