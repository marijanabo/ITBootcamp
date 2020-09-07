import React, { useState } from 'react'

const Forma = () => {
    const [unos, setUnos] = useState('')
  
    return (
      <>
        <input value={unos} onChange={(e)=>setUnos(e.target.value)}/>
        <button>{unos}</button>
        <p>{unos}</p>
      </>
    )
}

export default Forma