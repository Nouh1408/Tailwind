import React from 'react'
import styles from './About.module.css'
import { useState } from 'react'
export default function About() {
  const [isOk, setIsOk] = useState(false)
  return (
    <>
    <button onClick={() => setIsOk(!isOk)}>chamge</button>
    <h2 className={`${isOk ? "bg-sky-500 " : "bg-[aqua]"} text-3xl`}>lorem3</h2> {/* to overright on the tailwind classes // not used so much like inline style */}

    <button className='btn'>Hello</button>
    <button className='btn bg-red-800'>Hello</button>
    </>
  )
}
