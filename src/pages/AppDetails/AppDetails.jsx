import React, { useState } from 'react'
import img from '../../assets/demo-app (2).webp'
import star from '../../assets/icon-ratings.png'
import like from '../../assets/icon-review.png'
import download from '../../assets/icon-downloads.png'
import { useLoaderData, useParams } from 'react-router'
import { addToInstallation } from '../../utility/AddToLocalStorage'

const AppDetails = () => {
    const [installed, setInstalled] = useState("Install")
    const { id } = useParams()
    const appId = parseInt(id)
    const apps = useLoaderData()
    const singleApp = apps.find(app => app.id === appId)
    const { title } = singleApp

    const markAsInstalled = id => {
        addToInstallation(id)
        alert("App Installed")
        setInstalled("Installed")
    }
    return (
        <div>
            <div className='flex  p-5 m-10'>
                <img className='w-[250px] h-[250px]' src={img} alt="" />
                <div className='ml-10'>
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
                    </div><button disabled={installed === "Installed"} onClick={() => markAsInstalled(id)} className="btn bg-[#00D390] w-[250px] h-[40px] text-white mt-5">{installed} (291 MB)</button>
                </div>
            </div>

            <hr className='text-gray-300' />
            <div className='m-15'>
                <h1 className='font-bold text-lg mb-5'>Ratings</h1>
                <div>
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
                <p className='mb-10 text-gray-600'>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
                </p>
                <p className='mb-10 text-gray-600'>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.

                </p>
                <p className='mb-5 text-gray-600'>
                    For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
                </p>
            </div>

        </div>
    )
}

export default AppDetails