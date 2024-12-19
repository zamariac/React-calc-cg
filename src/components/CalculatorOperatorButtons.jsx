import React from 'react'
import './CalculatorOperatorButtons.css'

export default function CalculatorOperatorButtons({operator, functionalityOperador}) {
    const clase = operator === '+' || operator === '-' || operator === '*' || operator === '/' ? 'operator button' : 'operator-gray button'
  return (
    <>
      <button onClick={()=>functionalityOperador(operator)} className={clase}>{operator}</button>

    </>
  )
}
// if statement se cambia el color


//props funcionales a cada button segun cada un que tiene hacer
