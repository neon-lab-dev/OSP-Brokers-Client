import DashboardHeader from '@/components/Admin/DashboardHeader/DashboardHeader';
import Sidebar from '@/components/Admin/Sidebar/Sidebar';
import React, { ReactNode } from 'react';

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col gap-10'>
                <DashboardHeader />
                <div className='p-7'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;