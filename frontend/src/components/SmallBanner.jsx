import React from 'react'
import logo from '../assets/noBG.png'

const SmallBanner = () => {
  return (
    <div className='flex items-center justify-center'>
      <img src={logo} className='h-30 w-30' alt="" />
      <h1 className='text-6xl font-serif'>Foxnote</h1>
    </div>
  )
}

export default SmallBanner
