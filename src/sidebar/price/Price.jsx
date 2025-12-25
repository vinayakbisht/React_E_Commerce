
import React, { useState } from 'react'
import "./price.css"
import Input from '../../components/Input';

const Price = ({handleChange}) => {

  return (
    <div className='price'>
        <h2 className='sidebar-title'>Price</h2>
        <Input value={"All"} title={"All"} handleChange={handleChange}/>
        <Input value={"50"} title={"$0 - $50"} handleChange={handleChange}/>
        <Input value={"100"} title={"$50 - $100"} handleChange={handleChange}/>
        <Input value={"150"} title={"$100 - $150"} handleChange={handleChange}/>
        <Input value={"200"} title={"Over $150"} handleChange={handleChange}/>
    
    </div>
  )
}

export default Price