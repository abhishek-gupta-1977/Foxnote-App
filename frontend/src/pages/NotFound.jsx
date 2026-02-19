import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-w-full min-h-screen flex items-center justify-center bg-cyan-100'>
     <div className='text-center'>
         <h1 className='text-4xl font-serif m-4'>404 - Page Not Found!</h1>
      <p className='tracking-wider text-lg my-3 mb-10'>We're sorry, but the page you're looking for doesn't exist.</p>
      <Link className='border bg-amber-100 border-gray-500 p-2 rounded-lg text-cyan-600 hover:bg-gray-100 ' to="/">Go back to Home</Link>
     </div>
    </div>
  )
}

export default NotFound
