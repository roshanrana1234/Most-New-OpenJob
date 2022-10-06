import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserFindJob = () => {
    return (
        <>
            <div className='max-w-10/12 m-auto' >
                <Outlet />
            </div>
        </>
    )
}

export default UserFindJob;