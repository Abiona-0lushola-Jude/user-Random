import React from 'react'

const Header = () => {
  return (
    <div className='py-10 px-20 flex items-center justify-between'>
      <div className="py-5 px-10 w-fit">
        <h1 className="text-2xl">User@Random</h1>
      </div>
      <div className="flex gap-20 items-center">
        <h2>More</h2>
        <h2>Api</h2>
      </div>
    </div>
  )
}

export default Header
