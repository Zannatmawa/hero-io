
import React, { Suspense } from 'react'
import { Link } from 'react-router';

import AllApp from '../AllApp/AllApp'


const Apps = ({ data }) => {
    const datas = data.slice(0, 8)
    return (
        <div className='mt-15 mb-15 bg-base-200 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-3xl mb-4'>Trending Apps</h1>
            <p className='text-gray-500 mb-15'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<span>Loading....</span>}>
                <div className='md:w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    {
                        datas.map((app) => <AllApp key={app.id} app={app}></AllApp>)
                    }
                </div>
            </Suspense>
            <Link to='/allAppsPage' className="btn w-[150px] m-5 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"> Show all</Link>
        </div >
    )
}

export default Apps