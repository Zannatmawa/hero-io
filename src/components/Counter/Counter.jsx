import React from 'react'

const Counter = () => {
    return (
        <div className='text-white flex flex-col items-center justify-center md:w-[1200px] w-[350px] h-[400px] bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
            <h1 className='text-4xl font-bold '>Trusted by Millions, Built for You</h1>
            <div className='mt-15 flex justify-between md:flex-row flex-col  md:w-[800px] w-[350px]'>
                <div>
                    <h5 className='text-sm mb-5'>Total Downloads</h5>
                    <h1 className='text-5xl font-bold mb-5'>29.6M</h1>
                    <h2 className='text-sm mb-5'>21% more than last month</h2>
                </div>
                <div>
                    <h5 className='text-sm mb-5'>Total Reviews</h5>
                    <h1 className='text-5xl font-bold mb-5'>906K</h1>
                    <h2 className='text-sm mb-5'>46% more than last month</h2>
                </div>
                <div>
                    <h5 className='text-sm mb-5'>Active Apps</h5>
                    <h1 className='text-5xl font-bold mb-5'>132+</h1>
                    <h2 className='text-sm mb-5'>31 more will Launch</h2>
                </div>
            </div>
        </div>
    )
}

export default Counter