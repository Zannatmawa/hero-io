import React from 'react'


const Counter = () => {
    return (
        <div className='text-white flex flex-col md:mt-0 mt-15 items-center justify-center  h-[400px] bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
            <h1 className='md:text-4xl  font-bold'>Trusted by Millions, Built for You</h1>
            <div className='md:mt-15 mt-4 flex justify-between md:flex-row flex-col items-center  md:w-[1200px] mx-auto w-[350px]'>
                <div className='md:w-[300px] w-[150px]  mb-2'>
                    <h5 className='text-sm  md:mb-5 mb-1'>Total Downloads</h5>
                    <h1 className='md:text-5xl text-2xl font-bold md:mb-5 mb-1'>29.6M</h1>
                    <h2 className='text-sm md:mb-5 mb-1'>21% more than last month</h2>
                </div>
                <div className='md:w-[300px] w-[150px]  mb-2'>
                    <h5 className='text-sm md:mb-5 mb-1'>Total Reviews</h5>
                    <h1 className='md:text-5xl text-2xl  font-bold md:mb-5 mb-1'>906K</h1>
                    <h2 className='text-sm md:mb-5 mb-1'>46% more than last month</h2>
                </div>
                <div className='md:w-[300px] w-[150px] '>
                    <h5 className='text-sm md:mb-5 mb-1'>Active Apps</h5>
                    <h1 className='md:text-5xl text-2xl  font-bold md:mb-5 mb-1'>132+</h1>
                    <h2 className='text-sm md:mb-5 mb-1'>31 more will Launch</h2>
                </div>
            </div>
        </div>
    )
}

export default Counter