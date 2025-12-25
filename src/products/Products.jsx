import React from 'react'
import "./products.css"
import Card from '../components/Card'


const Products = ({data}) => {
  return (
    <section className='card-container'>
      {data && data.map((d,id) => {
        return <Card key={id} data={d}/>
      })}
      
    </section>
  )
}

export default Products