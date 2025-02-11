import React from 'react'
import styles from './About.module.css'
import { useState } from 'react'
export default function About() {
  const [isOk, setIsOk] = useState(false)
  return (
    <>
    <button onClick={() => setIsOk(!isOk)}>chamge</button>
    <h2 className={`${isOk ? "bg-sky-500 " : "bg-red-600"} text-3xl`}>lorem3</h2>
    </>
  )
}
