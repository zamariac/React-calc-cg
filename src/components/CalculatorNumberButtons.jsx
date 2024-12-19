import React from 'react'
import './CalculatorNumberButtons.css'

export default function CalculatorNumberButtons({number, functionality}) {
  const zero = number === 0 ? 'zero button' : 'button'
  return (
    <>
        <button onClick={() => functionality(number)} className={zero}>{number}</button>
    </>
  )
}
