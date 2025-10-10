import React from 'react'
import NotFound from '../../assets/App-Error.png'
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';

const AppsNotFound = () => {
    return (
        <>
            <Navbar />
            <div className='flex m-10 flex-col justify-center items-center'>
                <img className='md:w-[460px] w-[300px]' src={NotFound} alt="" />
                <div className='flex flex-col items-center'>
                    <h1 className='text-[#001931] font-bold text-3xl'>Oops, page not found!</h1>
                    <p className='text-gray-600'>The page you are looking for is not available.</p>
                    <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>GO Back!</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AppsNotFound