import React from 'react'

const Input = ({ value, title, handleChange}) => {
  return (
    <label className='sidebar-label-container'>
      <input type="radio" name='price' value={value == "All" ? "" : value} onChange={handleChange} />
      <span className='checkmark'></span>
      {title}
    </label>
  )
}

export default Input