import React from 'react'
import styles from './Home.module.css'
export default function Home() {
  return (
    <section className='p-10'>

      <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
    <div className='bg-red-400 space-y-4 mt-10 p-3'>
        <h2 className='bg-sky-700 '>Lorem, ipsum.</h2>
        <h2 className='bg-sky-700 transition-all hover:duration-1000 delay-100 hover:bg-red-500 hover:transition'>Lorem, ipsum.</h2>
        {
          ['03','04','05'].map((num) =>
            <h2 className='bg-sky-700 '>Lorem, ipsum.{num}</h2>)
        }

    </div>
    <div className='text-slade-200 sm:bg-red-800 mt-4 md:bg-blue-700 lg:bg-green-400'>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
    <div className='mt-3 bg-blue-600 flex-wrap flex'>
        {
          Array(20).fill(0).map((_,index) => (
            <>
            <div className=' text-white w-full sm:1/2 md:1/3 lg:1/4 p-2'  >
            <div className='m-3 bg-red-600'>
            <p>{index} Lorem ipsum dolor sit.</p>
            </div>
            </div>
            </>
          ))
        }
    </div>

    </section>
  )
}
