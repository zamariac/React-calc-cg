import React from 'react'
import './CalculatorScreen.css'


export default function CalculatorScreen({number}) {
  return (
    <>
      <div className="calculator-screen">{number}</div>
    </>
  )
}
