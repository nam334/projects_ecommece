import React from 'react'

const FilterBySize = () => {
  return (
    <>
    <div className='px-10 py-2'>
    <p className='text-[#E69458] text-xs font-medium py-1'>
        Filter By Size
        </p>
        <form >
            <div className='flex items-center text-center px-2 py-1 justify-between'>
            <div className='flex'>
            <input id="men" type="checkbox" class="appearance-none..." />
            <label for='men' className='text-[#294850] text-xs leading-5 px-2'>XXS</label>
            </div>
            <p className='text-[#9AA5B3] text-xs leading-5 px-2'>(9)</p>
            </div>
            <div className='flex items-center text-center px-2 py-1 justify-between'>
            <div className='flex'>
            <input id="men" type="checkbox" class="appearance-none..." />
            <label for='men' className='text-[#294850] text-xs leading-5 px-2'>XS</label>
            </div>
            <p className='text-[#9AA5B3] text-xs leading-5 px-2'>(12)</p>
            </div>
            <div className='flex items-center text-center px-2 py-1 justify-between'>
            <div className='flex'>
            <input id="men" type="checkbox" class="appearance-none..." />
            <label for='men' className='text-[#294850] text-xs leading-5 px-2'>S</label>
            </div>
            <p className='text-[#9AA5B3] text-xs leading-5 px-2'>(12)</p>
            </div>
            <div className='flex items-center text-center px-2 py-1 justify-between'>
            <div className='flex'>
            <input id="men" type="checkbox" class="appearance-none..." />
            <label for='men' className='text-[#294850] text-xs leading-5 px-2'>M</label>
            </div>
            <p className='text-[#9AA5B3] text-xs leading-5 px-2'>(13)</p>
            </div>
            <div className='flex items-center text-center px-2 py-1 justify-between'>
            <div className='flex'>
            <input id="men" type="checkbox" class="appearance-none..." />
            <label for='men' className='text-[#294850] text-xs leading-5 px-2'>L</label>
            </div>
            <p className='text-[#9AA5B3] text-xs leading-5 px-2'>(11)</p>
            </div>
            <div className='flex items-center text-center px-2 py-1 justify-between'>
            <div className='flex'>
            <input id="men" type="checkbox" class="appearance-none..." />
            <label for='men' className='text-[#294850] text-xs leading-5 px-2'>XL</label>
            </div>
            <p className='text-[#9AA5B3] text-xs leading-5 px-2'>(12)</p>
            </div>
            <div className='flex items-center text-center px-2 py-1 justify-between'>
            <div className='flex'>
            <input id="men" type="checkbox" class="appearance-none..." />
            <label for='men' className='text-[#294850] text-xs leading-5 px-2'>XXL</label>
            </div>
            <p className='text-[#9AA5B3] text-xs leading-5 px-2'>(8)</p>
            </div>
        </form>
    </div>
    </>
  )
}

export default FilterBySize