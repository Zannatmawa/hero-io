
import Hero from '../../components/Hero/Hero'
import Counter from '../../components/Counter/Counter'
import Apps from '../Apps/Apps'
import { useLoaderData } from 'react-router'
import { Suspense } from 'react'


const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Hero />
            <Counter />
            <Suspense fallback={<span className="loading loading-spinner loading-lg text-green-500"></span>}>
                <Apps data={data} />
            </Suspense>
        </div>
    )
}

export default Home