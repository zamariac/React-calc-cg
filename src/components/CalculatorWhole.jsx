import React, { useEffect, useState } from 'react'
import CalculatorNumberButtons from './CalculatorNumberButtons'
import CalculatorOperatorButtons from './CalculatorOperatorButtons'
import './CalculatorWhole.css'
import CalculatorScreen from './CalculatorScreen'

export default function CalculatorWhole() {

const [buttonsClickedArray, setButtonsClickedArray]= useState([]);
const [firstNumber, setFirstNumber] = useState(0);

const handleClick = (operator) => {
  setButtonsClickedArray([
    ...buttonsClickedArray, firstNumber, operator
  ])
  // estado inicial
  setFirstNumber(0)
  if (operator === '=') {
    const result = calculateNumbers();
    setFirstNumber(result)
    console.log(result)
  }
}

const calculateNumbers = () => {
  let num1 = parseFloat(buttonsClickedArray[0]);
  let operator = buttonsClickedArray[1];
  let num2 = parseFloat(buttonsClickedArray[2]);
  console.log('calculate numbers', num1, operator, num2);
  switch (operator) {
      case '+':
          setFirstNumber(num1 + num2);
          // console.log(firstNumber);
      case '-':
          return num1 - num2;
      case '*':
          return num1 * num2;
      case '÷': 
          return num1 / num2;
      default:
          return 'Error';
  }
}

useEffect(()=> {
  console.log(buttonsClickedArray)
},[buttonsClickedArray]
);

const evaluate = (number) => {
  if (firstNumber !== 0) {
    console.log(typeof(firstNumber))
    console.log(typeof(number))
  const concatNumber = firstNumber.concat(number);
  setFirstNumber(concatNumber);
  } else {
    setFirstNumber(number);
  }
}

  return (
    <>
    <div className='container'>
        <main className='calculator'>
      <CalculatorScreen number={firstNumber} />
      <div className='calculator-buttons'>
        <CalculatorOperatorButtons functionalityOperador={handleClick} operator='C' />  
        <CalculatorOperatorButtons functionalityOperador={handleClick} operator='+/-' />
        <CalculatorOperatorButtons functionalityOperador={handleClick} operator='%' />
        <CalculatorOperatorButtons functionalityOperador={handleClick} operator='÷' />
        <CalculatorNumberButtons functionality={evaluate} number={'7'} />
        <CalculatorNumberButtons functionality={evaluate} number={'8'} />
        <CalculatorNumberButtons functionality={evaluate} number={'9'}/>
        <CalculatorOperatorButtons functionalityOperador={handleClick} operator='*' />
        <CalculatorNumberButtons functionality={evaluate} number={'4'} />
        <CalculatorNumberButtons functionality={evaluate} number={'5'} />
        <CalculatorNumberButtons functionality={evaluate} number={'6'}/>
        <CalculatorOperatorButtons functionalityOperador={handleClick} operator='-' />
        <CalculatorNumberButtons functionality={evaluate} number={'1'}/>
        <CalculatorNumberButtons functionality={evaluate} number={'2'}/>
        <CalculatorNumberButtons functionality={evaluate} number={'3'}/>
        <CalculatorOperatorButtons functionalityOperador={handleClick} operator='+' />
        <CalculatorNumberButtons functionality={evaluate} number={'0'} />
        <CalculatorNumberButtons functionality={evaluate} number= ',' />
        <CalculatorOperatorButtons functionalityOperador={handleClick} operator='=' />
      </div>
      </main>
    </div>
    </>

  )
}
