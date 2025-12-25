import React from 'react'

const Button = ({filters,title,handleClick}) => {
  return (
    <button className={filters.company == title? "btns active" : 'btns'} 
     name={"company"} onClick={handleClick} value={title == "All Products"? "": title}>
      {title} </button>

  )
}

export default Button