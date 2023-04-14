import React,{useState} from 'react'
import BotonCalculator from './BotonCalculator';
import Touch from './Touch';
import BotonClear from './BotonClear';
import {evaluate} from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');
  const addInput=(value)=>{
    setInput(input+value)
  }

  const result=()=>{
    if(input){
      setInput(evaluate(input))

    }
  }
  return (
    <div className='calculator-container'>
        <Touch input={input}/>
       <div className='fila'>
       <BotonCalculator handleClick={addInput}>1</BotonCalculator>
       <BotonCalculator handleClick={addInput}>2</BotonCalculator>
       <BotonCalculator handleClick={addInput}>3</BotonCalculator>
       <BotonCalculator handleClick={addInput}>+</BotonCalculator>
       

       </div>
       <div className='fila'>
       <BotonCalculator handleClick={addInput}>4</BotonCalculator>
       <BotonCalculator handleClick={addInput}>5</BotonCalculator>
       <BotonCalculator handleClick={addInput}>6</BotonCalculator>
       <BotonCalculator handleClick={addInput}>-</BotonCalculator>
       </div>
       <div className='fila'>
       <BotonCalculator handleClick={addInput}>7</BotonCalculator>
       <BotonCalculator handleClick={addInput}>8</BotonCalculator>
       <BotonCalculator handleClick={addInput}>9</BotonCalculator>
       <BotonCalculator handleClick={addInput}>*</BotonCalculator>
       </div>
       <div className='fila'>
        
        <BotonCalculator handleClick={result}>=</BotonCalculator>
        <BotonCalculator handleClick={addInput}>0</BotonCalculator>
        <BotonCalculator handleClick={addInput}>.</BotonCalculator>
        <BotonCalculator handleClick={addInput}>/</BotonCalculator>
        
        
        </div>
       <div className='fila'>
      
        <BotonClear handleClick={setInput}>Clear</BotonClear>
        
       </div>
    </div>
  )
}

export default Calculator;