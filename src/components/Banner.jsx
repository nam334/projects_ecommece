import React from 'react'

const Banner = ({title, subtitle, cta, tagline, imgsrc}) => {
  return (
    <div className='relative'>
        <img alt='banner' src={imgsrc} className='absolute' />
        <p className='absolute'>{title}</p>
        <p>{subtitle}</p>
        <p>{tagline}</p>
        <p>{cta}</p>
    </div>
  )
}

export default Banner