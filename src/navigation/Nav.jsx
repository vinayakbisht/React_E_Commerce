import React from 'react'
import "./nav.css"
import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineUserAdd } from 'react-icons/ai'
const Nav = ({query, handleInputChange}) => {
  return (
    <nav>
        <div className="nav-container">
            <input type="text" placeholder='Search shoes here' className="search-input" name={"query"} value={query} onChange={handleInputChange} />
        </div>
        <div className="profile-container">
            <a href="#1"><AiOutlineHeart className='nav-icons'/></a>
            <a href="#2"><AiOutlineShoppingCart className='nav-icons'/></a>
            <a href="#3"><AiOutlineUserAdd className='nav-icons'/></a>
        </div>
    </nav>
  )
}

export default Nav