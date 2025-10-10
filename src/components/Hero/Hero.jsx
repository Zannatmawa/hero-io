import { Link } from 'react-router'
import hero from '../../assets/hero.png'

const Hero = () => {
    return (
        // 
        <div className='bg-base-200 md:p-15 p-0 flex justify-between flex-col items-center md:mb-0 mb-25'>
            <div className="hero">
                <div className="hero-content text-center md:w-[1200px] w-[350px]">
                    <div className="p-5 w-[800px]">
                        <h1 className="text-[#001931] text-6xl font-bold">We Build <br />
                            <span className='text-[#632EE3]'>Productive</span> Apps</h1>
                        <p className="py-6 text-gray-800">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <Link className="btn btn-white mr-3" to="https://play.google.com/store/games?device=windows">Google Play</Link>
                        <Link className="btn btn-white" to="https://www.apple.com/app-store/">Play store</Link>

                    </div>
                </div>
            </div>
            <div>
                <img className='md:w-[800px] w-[300px]' src={hero} alt="" />
            </div>
        </div>
    )
}

export default Hero