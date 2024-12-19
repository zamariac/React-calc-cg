import { useState } from 'react'
import './App.css'
import CalculatorNumberButtons from './components/CalculatorNumberButtons'
import CalculatorWhole from './components/CalculatorWhole'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CalculatorWhole />
    </>
  )
}

export default App
