import ForumHeading from '@/components/ForumPage/ForumHeading/ForumHeading'
import Navbar from '@/components/Shared/Navbar/Navbar'
import React, { ReactNode } from 'react'

const ForumLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar/>
      <ForumHeading/>
      <div className='grid grid-cols-5 gap-10'>
        <div className='col-span-1 h-[500px] bg-amber-50 '>
          <h1>Menu</h1>
        </div>
        <div className='col-span-3'>
        {children}
        </div>
        <div className='col-span-1 h-[500px] bg-amber-50'>
          <h1>Categories</h1>
        </div>
      </div>
    </div>
  )
}

export default ForumLayout