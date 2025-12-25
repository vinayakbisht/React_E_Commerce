import React from 'react'
import "./recommended.css"
import data from '../db/data'
import Button from '../components/Button';

const uniqueCompanies = ["All Products", ...new Set(data.map(({ company }) => company))];
const Recommended = ({ filters, handleClick }) => {
  return (
    <div className='recommended'>
      <h2 className='heading'>Recommended</h2>
      <div className='recommended-btns'>
         {uniqueCompanies.map((company, id) =>
          <Button handleClick={handleClick} title={company} key={id} filters={filters} />)}
      </div>

    </div>
  )
}

export default Recommended