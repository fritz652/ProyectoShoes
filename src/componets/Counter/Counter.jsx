import "./Counter.css"
import { useState } from 'react'

export const Counter = () => {
    const [number,setNumber]= useState(0);

    const incremento = ()=>{
        setNumber(number+1);
    }
    const decremento = ()=>{
        setNumber(number-1);
    }
  return (
    <>      
        <div className='d-flex'>
            <button onClick={incremento} className='bg-btn'>+</button>
            <div className="w-100">{number}</div>
            <button onClick={decremento} className='bg-btn'>-</button>
        </div>
        <hr/>
    </>
  )
}
