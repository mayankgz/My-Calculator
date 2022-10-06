import React from 'react'
import CalculatorGrid from './CalculatorGrid'

export default function Container() {
  return (
    <>
        <div className='flex grid container-lg bg-stone-200 h-screen justify-center content-center text-center'>
            <h1 className='text-4xl mb-5'>Calculator</h1>
            <CalculatorGrid/>
        </div>
    </>
  )
}
