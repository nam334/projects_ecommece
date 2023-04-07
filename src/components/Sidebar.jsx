import React from 'react'
import FilterByCategories from './FilterByCategories'
import FilterBySize from './FilterBySize'
import FilterByColour from './FilterByColour'
import FilterByProductStatus from './FilterByProductStatus'
const Sidebar = () => {
  return (
    <div className=' h-full'>
        <FilterByCategories/>
        <FilterByColour/>
        <FilterBySize/>
        <FilterByProductStatus/>
    </div>
  )
}

export default Sidebar