import { useState } from "react"


const EyeShow = () => {


    const [showEye,setShowEye]= useState(true);

    const handleShowEye = () =>{
        setShowEye(!showEye)
    }

  return (
    <div>
        <input type={showEye ? "password" : "text" } />
        <button onClick={handleShowEye} >
            {showEye ? <img src="../../../public/icons/eye-slash.svg" alt="ver" /> : <img src="../../../public/icons/eye-fill.svg" alt="ocultar" />}
        </button>

    </div>
  )
}

export default EyeShow