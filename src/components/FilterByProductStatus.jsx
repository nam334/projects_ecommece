import React from 'react'

const FilterByProductStatus = () => {
  return (
    <>
    <div className='px-10 py-2'>
    <p className='text-[#E69458] text-xs font-medium py-1'>
        Product Status
        </p>
        <form >
            <div className='flex items-center text-center px-2 py-1'>
            <input id="men" type="checkbox" class="appearance-none..." />
            <label for='men' className='text-[#294850] text-xs leading-5 px-2'>In Stock</label>
            </div>
            <div className='flex items-center text-center px-2 py-1'>
            <input id="men" type="checkbox" class="appearance-none..." />
            <label for='men' className='text-[#294850] text-xs leading-5 px-2'>On Sale</label>
            </div>
           
      
        </form>
    </div>
    </>
  )
}

export default FilterByProductStatus