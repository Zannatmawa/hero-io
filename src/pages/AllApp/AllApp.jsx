import React from 'react'
import { FaStar } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import imageData from '../../../public/img.json';


import img from '../../assets/demo-app (2).webp'
import { Link } from 'react-router';

const AllApp = ({ app }) => {

    const appImage = imageData[app.id]?.image;

    return (
        <>
            {/* {
                imageData.map((item, index) => (
                    <img
                        key={index}
                        src={item.image}
                        alt={`App ${index + 1}`}
                        className="rounded-xl shadow-md"
                    />
                ))
            } */}
            < Link to={`/appDetails/${app.id}`
            }>
                <div className='md:w-[300px] flex flex-col justify-center items-center  shadow-lg h-[350px] bg-white'>

                    {
                        appImage ? (
                            <img
                                src={img}
                                alt={app.title}
                                className='w-[200px] h-[200px] object-cover rounded-lg mb-3'
                            />
                        ) : (
                            <img
                                src={img}
                                alt={app.title}
                                className='w-[200px] h-[200px] object-cover rounded-lg mb-3'
                            />
                        )
                    }

                    <div className='text-left w-[250px] p-5'>
                        <h1 className='text-lg'>{app.title}</h1>
                        <div className='flex  justify-between text-[#00D390]'>
                            <div className='flex items-center'>
                                <MdOutlineFileDownload />
                                <h2>{app.downloads}M</h2>
                            </div>

                            <div className='flex items-center text-[#FF8811]'>
                                <FaStar />
                                <h2>{app.ratingAvg}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Link >
        </>
    )
}

export default AllApp