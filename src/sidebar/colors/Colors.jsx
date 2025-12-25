import React, { useState } from 'react'
import data from '../../db/data';
import "./colors.css"

const Colors = ({handleChange}) => {

    const uniqueColors =  ["All", ...new Set(data.map(({color}) => color ))]
  return (
    <div className='colors'>
        <h2 className='sidebar-title'>Colors</h2>
        {uniqueColors.map((c) => {
            return <label key={c} className='sidebar-label-container'>
                    <input type="radio" name='color' value={c == "All"? "":c} onChange={handleChange}/>
                    <span className='checkmark colored-input' style={{background : (c == "All"? "linear-gradient(135deg, #e3092dff, #2563eb)" : c), border: "1px solid black"}}></span>
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                </label>
        })}
    </div>
  )
}

export default Colors