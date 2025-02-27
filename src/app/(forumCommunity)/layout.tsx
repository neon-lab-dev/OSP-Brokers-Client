import Navbar from '@/components/Shared/Navbar/Navbar';
import React, { ReactNode } from 'react';

const ForumCommunityLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
      <Navbar/>
      <div className='flex w-full gap-10'>
        <div className='w-[20%] h-[500px] bg-amber-50 '>
          <h1>Menu</h1>
        </div>
        <div className='w-[80%]'>
        {children}
        </div>
      </div>
    </div>
    );
};

export default ForumCommunityLayout;