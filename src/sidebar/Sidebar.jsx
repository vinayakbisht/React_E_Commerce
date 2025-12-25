import React from 'react'
import Category from './category/Category'
import Colors from './colors/Colors'
import Price from './price/Price'
import "./sidebar.css"
import { GiShoppingCart } from "react-icons/gi";

const Sidebar = ({handleChange}) => {
   
  return (
    <div className='sidebar'>
      <div className="logo-container">
        <h1><GiShoppingCart className='logo'/></h1>
      </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar