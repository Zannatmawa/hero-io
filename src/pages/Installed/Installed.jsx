import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
import { getInstalledApp } from '../../utility/AddToLocalStorage';
import Apps from '../Apps/Apps';

const Installed = () => {
    const [appList, setAppList] = useState([])
    console.log(appList)
    const data = useLoaderData()
    console.log(data)

    useEffect(() => {
        const storedAppsData = getInstalledApp()
        const converted = storedAppsData.map(id => parseInt(id))
        const myAppList = data.filter(app => converted.includes(app.id))
        setAppList(myAppList)
    }, [])
    return (
        <div className='bg-base-300'>
            <div className='mt-15 mb-15 text-center'>
                <h1 className='font-bold text-3xl mb-4'>Your Installed Apps</h1>
                <p className='text-gray-500 mb-15'> Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='m-15 flex justify-between'>
                <h1 className='font-bold text-xl mb-4'>({appList.length})Apps Found</h1>
                <h2>Sort by</h2>
            </div>
            {
                appList.map((app) => <>
                    <div className='my-15 mx-auto flex items-center p-5 justify-between bg-white md:w-[1200px] h-[70px] rounded'>
                        <div>
                            {/* <img src="" alt="" /> */}
                            <h1>{app.title}</h1>
                        </div>
                        <button className='btn btn-primary'>uninstall</button>

                    </div>
                </>)
            }

        </div>
    )
}

export default Installed