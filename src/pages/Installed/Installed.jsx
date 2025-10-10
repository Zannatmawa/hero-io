import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { getInstalledApp, removeFromInstallation } from '../../utility/AddToLocalStorage';
import img from '../../assets/demo-app (2).webp'
import { MdOutlineFileDownload } from "react-icons/md";



const Installed = () => {
    const [appList, setAppList] = useState([])
    const [sort, setSort] = useState("")

    const [uninstalled, setUninstalled] = useState([])
    console.log(uninstalled)
    // const { id } = useParams()
    // const appId = parseInt(id)
    // const apps = useLoaderData()
    // const singleApp = apps.find(app => app.id === appId)
    // const { title } = singleApp
    const data = useLoaderData()

    useEffect(() => {
        const storedAppsData = getInstalledApp()
        const converted = storedAppsData.map(id => parseInt(id))
        const myAppList = data.filter(app => converted.includes(app.id))
        setAppList(myAppList)
    }, [])


    const removeApps = (id) => {
        removeFromInstallation(id)
        const storedAppsData = getInstalledApp()
        const converted = storedAppsData.map(id => parseInt(id))
        const myAppList = data.filter(app => converted.includes(app.id))
        setAppList(myAppList)
    }

    const handleSort = (type) => {
        setSort(type)
        if (type === "downloads-desc") {
            const sortedByPage = [...appList].sort((a, b) => a.downloads - b.downloads)
            setAppList(sortedByPage)
        }
        if (type === "downloads-asc") {
            const sortedByPage = [...appList].sort((a, b) => b.downloads - a.downloads)
            setAppList(sortedByPage)
        }
    }

    return (
        <div className='bg-base-300'>
            {/* <h1>{title}</h1> */}
            <div className='mt-15 mb-15 text-center'>
                <h1 className='font-bold text-3xl md:mb-4'>Your Installed Apps</h1>
                <p className='text-gray-500 mb-15 md:p-0 p-6 text-center'> Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='md:m-15 m-5 flex justify-between'>
                <h1 className='font-bold text-xl mb-4'>({appList.length})Apps Found</h1>
                <details className="dropdown md:mr-20 md:mb-10">
                    <summary className="btn m-1">Sort by </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("downloads-desc")}>High-Low</a></li>
                        <li><a onClick={() => handleSort("downloads-asc")}>Low-High</a></li>
                    </ul>
                </details>
            </div>
            {
                appList.map((app) => <>
                    <div className='my-15 mx-auto flex items-center p-5 justify-between bg-white md:w-[1200px] h-[70px] rounded'>
                        <div className='flex '>
                            <img
                                src={img}
                                alt={app.title}
                                className='w-[40px] h-[40px] object-cover rounded-t-lg'
                            />
                            <div className='ml-5'>
                                <h1>{app.title}</h1>
                                <div className='flex items-center'>
                                    <MdOutlineFileDownload />
                                    <h1>{app.downloads}</h1>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => removeApps(app.id)} className='btn btn-primary'>uninstall</button>

                    </div>
                </>)
            }

        </div>
    )
}

export default Installed