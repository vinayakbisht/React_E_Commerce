import React from 'react'
import { IoBag } from "react-icons/io5";

const Card = ({data}) => {
  return (
    <div className='card'>
        <img src={data.img} alt={data.title} />
        <div className="card-details">
          <h3 className="card-title">{data.title}</h3>
          <section className='card-reviews'>{data.star}{data.star}{data.star}{data.star} <span className='total-reviews'>{data.reviews}</span></section>
          <section className='card-price'><del>{data.prevPrice}</del> {data.newPrice} <IoBag className='bag-icon'/></section>
        </div>
    </div>
  )
}

export default Card