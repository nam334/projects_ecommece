import React from 'react'
import {BsCircleFill} from "react-icons/bs";
const FilterByColour = () => {
  return (
    <>
    <div className='px-10 py-2'>
    <p className='text-[#E69458] text-xs font-medium py-1'>
        Filter By Colour
        </p>
        <form >
            <div className='flex items-center text-center  py-1 justify-between'>
            <div className='flex items-center gap-1 '>
            <input id="men" type="checkbox" class="appearance-none..." />
            <BsCircleFill fill='black' size={10}/>
            <label for='men' className='text-[#294850] text-xs leading-5 '>Black</label>
            </div>
            <p className='text-[#9AA5B3] text-xs leading-5 px-2'>(9)</p>
            </div>
            <div className='flex items-center text-center  py-1 justify-between'>
            <div className='flex items-center gap-1 '>
            <input id="men" type="checkbox" class="appearance-none..." />
            <BsCircleFill fill='orange' size={10}/>
            <label for='men' className='text-[#294850] text-xs leading-5 '>Orange</label>
            </div>
            <p className='text-[#9AA5B3] text-xs leading-5 px-2'>(9)</p>
            </div>
            <div className='flex items-center text-center  py-1 justify-between'>
            <div className='flex items-center gap-1 '>
            <input id="men" type="checkbox" class="appearance-none..." />
            <BsCircleFill fill='blue' size={10}/>
            <label for='men' className='text-[#294850] text-xs leading-5 '>Blue</label>
            </div>
            <p className='text-[#9AA5B3] text-xs leading-5 px-2'>(9)</p>
            </div>
            <div className='flex items-center text-center  py-1 justify-between'>
            <div className='flex items-center gap-1 '>
            <input id="men" type="checkbox" class="appearance-none..." />
            <BsCircleFill fill='pink' size={10}/>
            <label for='men' className='text-[#294850] text-xs leading-5 '>Pink</label>
            </div>
            <p className='text-[#9AA5B3] text-xs leading-5 px-2'>(9)</p>
            </div>
            <div className='flex items-center text-center  py-1 justify-between'>
            <div className='flex items-center gap-1 '>
            <input id="men" type="checkbox" class="appearance-none..." />
            <BsCircleFill fill='green' size={10}/>
            <label for='men' className='text-[#294850] text-xs leading-5 '>Green</label>
            </div>
            <p className='text-[#9AA5B3] text-xs leading-5 px-2'>(9)</p>
            </div>
            <div className='flex items-center text-center  py-1 justify-between'>
            <div className='flex items-center gap-1 '>
            <input id="men" type="checkbox" class="appearance-none..." />
            <BsCircleFill fill='red' size={10}/>
            <label for='men' className='text-[#294850] text-xs leading-5 '>Red</label>
            </div>
            <p className='text-[#9AA5B3] text-xs leading-5 px-2'>(9)</p>
            </div>
            <div className='flex items-center text-center  py-1 justify-between'>
            <div className='flex items-center gap-1 '>
            <input id="men" type="checkbox" class="appearance-none..." />
            <BsCircleFill fill='purple' size={10}/>
            <label for='men' className='text-[#294850] text-xs leading-5 '>Purple</label>
            </div>
            <p className='text-[#9AA5B3] text-xs leading-5 px-2'>(9)</p>
            </div>

        </form>
    </div>
    </>
  )
}

export default FilterByColour