import React, { useState } from 'react'
import data from '../../db/data'
import "./category.css"
const Category = ({handleChange}) => {

    const uniqueCategory = ["All", ...new Set(data.map(({category}) => category))];  

  return (
    <div className='category'>
        <h2 className='sidebar-title'>Category</h2>
        {uniqueCategory.map((c) => {
                return <label key={c} className='sidebar-label-container'>
                        <input type="radio" name='category' value={c == "All"? "":c} 
                        onChange={handleChange}/>
                        <span className='checkmark'></span>
                        {c.charAt(0).toUpperCase() + c.slice(1)}
                     </label>
            })
        }
    </div>
  )
}

export default Category