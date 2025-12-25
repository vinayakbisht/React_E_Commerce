import React, { useState } from 'react'
import Nav from './navigation/Nav'
import Products from './products/Products'
import Sidebar from './sidebar/Sidebar'
import Recommended from './recommended/Recommended'
import data from './db/data'

const App = () => {

    const [filters,setFilters] = useState({
        category : "",
        color : "",
        price : "",
        query : "",
        company : ""
    });
    
    // also Toggling active state (click again to unselect)
    
    const handleFilterChange = (e) => {
      const {name,value} = e.currentTarget;
      console.log(name,value);
      setFilters( prev => ({...prev, [name] : prev[name] == value ? "": value}));
    }

  const filteredItems = data.filter(({title,company,newPrice,color,category}) => {
    if( filters.query && !title.toLowerCase().includes(filters.query.toLowerCase())) return false;
    if( filters.category && (category !== filters.category)) return false;
    if( filters.price && (newPrice !== filters.price)) return false;
    if( filters.color && (color !== filters.color)) return false;
    if( filters.company && (company !== filters.company)) return false;

    return true;
  })

  return (
    <>
     <Sidebar handleChange={handleFilterChange}/>
      <Nav query={filters.query} handleInputChange={handleFilterChange}/>
      <Recommended filters={filters} handleClick={handleFilterChange}/>
      <Products data={filteredItems}/>
      
    </>
  )
}

export default App