import React, { useState } from 'react'
import img from '../../assets/demo-app (2).webp'
import star from '../../assets/icon-ratings.png'
import like from '../../assets/icon-review.png'
import download from '../../assets/icon-downloads.png'
import { useLoaderData, useParams } from 'react-router'
import { addToInstallation } from '../../utility/AddToLocalStorage'
import BarCharts from '../BarCharts/BarCharts'
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import imageData from '../../../public/img.json';



const AppDetails = () => {


    const [installed, setInstalled] = useState("Install")
    const { id } = useParams()
    const appId = parseInt(id)
    const apps = useLoaderData()
    const singleApp = apps.find(app => app.id === appId)
    const { title } = singleApp

    const markAsInstalled = id => {
        addToInstallation(id)
        if (addToInstallation.includes(id)) {
            setInstalled("Installed")
        }
    }

    const appImage = imageData[singleApp.id] && imageData[singleApp.id].image
    return (
        <div>
            <div className='flex md:flex-row flex-col   p-5 m-10'>
                {
                    appImage ? (
                        <img
                            src={appImage}
                            className='w-[260px] h-[200px] object-cover rounded-t-lg'
                        />
                    ) : (
                        <img
                            src={img}
                            // alt={app.title}
                            className='w-[260px] h-[200px] object-cover rounded-t-lg'
                        />
                    )
                }
                <div className='md:ml-10 md:mt-0 mt-5'>
                    <h1 className='font-bold text-2xl mb-1'>{title}</h1>
                    <h2 className='text-gray-700 mb-3'>Developed by <span className='text-[#632EE3]'>productive</span>.io</h2>
                    <hr className='text-gray-300  mb-5' />
                    <div className='flex justify-around md:w-[390px]'>
                        <div>
                            <img className='w-[25px]' src={download} alt="" />
                            <h6 className='text-sm text-gray-600 mt-2'>Downloads</h6>
                            <h1 className='text-3xl font-bold mt-2'>8M</h1>
                        </div>
                        <div>
                            <img className='w-[25px]' src={star} alt="" />
                            <h6 className='text-sm text-gray-600 mt-2'>Average Ratings</h6>
                            <h1 className='text-3xl font-bold mt-2'>4.9</h1>
                        </div>
                        <div>
                            <img className='w-[25px]' src={like} alt="" />
                            <h6 className='text-sm text-gray-600 mt-2'>Total Reviews</h6>
                            <h1 className='text-3xl font-bold mt-2'>54K</h1>
                        </div>
                    </div><button onClick={() => markAsInstalled(id)} className={`btn bg-[#00D390] w-[250px] h-[40px] text-white mt-5`}>{installed} ( {
                        apps.filter((app) => app.id === appId).map((app) => (
                            app.size
                        ))
                    })</button>
                </div>
            </div>

            <hr className='text-gray-300' />
            <div className='m-15'>
                <h1 className='font-bold text-lg mb-5'>Ratings</h1>
                <div >

                    {/* <BarCharts apps={apps} /> */}
                    <div className='flex mb-5'>
                        <h2 className='text-gray-600 mr-4'>5 star</h2>
                        <div className='bg-amber-600 md:w-[1200px] w-[300px] h-[20px]'></div>
                    </div>
                    <div className='flex mb-5'>
                        <h2 className='text-gray-600 mr-4'>4 star</h2>
                        <div className='bg-amber-600 md:w-[700px] w-[300px] h-[20px]'></div>
                    </div>
                    <div className='flex mb-5'>
                        <h2 className='text-gray-600 mr-4'>3 star</h2>
                        <div className='bg-amber-600 md:w-[300px] w-[300px] h-[20px]'></div>
                    </div>
                    <div className='flex mb-5'>
                        <h2 className='text-gray-600 mr-4'>2 star</h2>
                        <div className='bg-amber-600 md:w-[200px] w-[300px] h-[20px]'></div>
                    </div>
                    <div className='flex mb-5'>
                        <h2 className='text-gray-600 mr-4'>1 star</h2>
                        <div className='bg-amber-600 md:w-[100px] w-[300px] h-[20px]'></div>
                    </div>
                </div>
                <div className='text-gray-600 flex  justify-around'>
                    <h1>0</h1>
                    <h1>3000</h1>
                    <h1>6000</h1>
                    <h1>9000</h1>
                    <h1>12000</h1>
                </div>
            </div>
            <div className='m-15'>
                <h1 className='font-bold text-lg mb-5'>Description</h1>
                {
                    apps.filter((app) => app.id === appId).map((app) => (
                        <p className='mb-10 text-gray-600'>{app.description}
                        </p>
                    ))
                }
            </div>


        </div>
    )
}

export default AppDetails