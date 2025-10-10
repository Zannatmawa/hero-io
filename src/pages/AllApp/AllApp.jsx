import React from 'react'
import { FaStar } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";


import img from '../../assets/demo-app (2).webp'
import { Link } from 'react-router';

const AllApp = ({ app }) => {

    return (
        <Link to={`/appDetails/${app.id}`}>
            <div className='md:w-[300px] flex flex-col justify-center items-center  shadow-lg h-[350px] bg-white'>
                <img className='w-[260px] rounded-sm' src={img} alt="" />
                <div className='text-left w-[250px]'>
                    <h1 className='text-lg'>{app.title}</h1>
                    <div className='flex  justify-between text-[#00D390]'>
                        <div className='flex items-center'>
                            <MdOutlineFileDownload />
                            <h2>9M</h2>
                        </div>

                        <div className='flex items-center text-[#FF8811]'>
                            <FaStar />
                            <h2>5</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default AllApp