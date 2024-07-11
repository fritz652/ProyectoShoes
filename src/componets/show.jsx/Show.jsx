import "./Show.css"

import { useState } from "react"

const Show = () => {

    const [show,setShow]= useState(true);
    
    const handleShow = ()=>{
      setShow(!show)
    }
  return (
    <>
      <div className="d-flex gap-60px">
        <div>{show ? <h1>Estoy aquí</h1> : <h1>******</h1>}</div>
        <button className="buttonCenter" onClick={handleShow}>
          {show ? "Ocultar" : "Mostrar"}
        </button>
      </div>
    </>
  )
}

export default Show