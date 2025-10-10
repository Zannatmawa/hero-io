import { useLoaderData } from 'react-router'
import { FaStar } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import React, { useState } from "react";



import img from '../../assets/demo-app (2).webp'
import { Link } from 'react-router';
import Search from '../Search/Search';
import AppsNotFound from '../AppsNotFound/AppsNotFound';
// import imageData from '../../../public/img.json';


const AllAppsPage = () => {
    const allApps = useLoaderData()
    const [search, setSearch] = useState("");

    const apps = allApps.filter((app) =>
        (app.title || "").toLowerCase().includes(search.toLowerCase())
    ).map((app) => (
        <Link to={`/appDetails/${app.id}`}>
            <div className='md:w-[300px] mt-5 flex flex-col justify-center items-center  shadow-lg h-[350px] bg-white'>


                <img
                    src={img}
                    alt={app.title}
                    className='w-[260px] h-[200px] object-cover rounded-t-lg'
                />
                <div className='text-left w-[250px]'>
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
        </Link>
    ));



    return (
        <div>
            <div className='mt-15 mb-15 text-center'>
                <h1 className='font-bold text-3xl md:mb-4 mb-1'>Our All Applications</h1>
                <p className='text-gray-500 mb-15 md:p-0 p-6 text-center'> Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='m-15 flex items-center justify-between md:flex-row flex-col-reverse'>
                <h1 className='font-bold text-xl mb-4 md:mt-0 mt-3'>({allApps.length})Apps Found</h1>
                {/* <Search /> */}

                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={search}
                        onChange={(e) => setSearch(e.target.value)} className='w-[350px]' type="search" required placeholder="Search" />
                    <button className="btn btn-primary">Search</button>
                </label>

            </div>
            <div className='mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-base-300'>
                {apps.length > 0 ? apps : <div className='md:w-[1300px] w-[300px]'><AppsNotFound /></div>}

                {/* {
                    allApps.map((app) =>
                        <Link to={`/appDetails/${app.id}`}>
                            <div className='md:w-[300px] mt-5 flex flex-col justify-center items-center  shadow-lg h-[350px] bg-white'>
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
                } */}
            </div>




        </div>
    )
}

export default AllAppsPage