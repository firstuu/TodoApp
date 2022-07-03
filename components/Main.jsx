import Image from 'next/image'
import React from 'react'

const Main= () => {
  return (
    <div className='w-full h-full text-center'>
        <div className='md:flex  max-w-[1240px] w-full p-2 py-16 justify-center items-center mx-auto'>
            {/* left */}
            <div className='mx-10 '>
                <h1 className='text-3xl font-bold mb-4'>Car ToDo App</h1>
                <p className='text-xl w-100'>Welcome on App where you can manage your things to do in the car and never miss a thing.</p>
            </div>
            {/* right */}
            <div className='mx-10 my-10'>
                <Image className='rounded-md' src={'/../public/car.jpg'} width={600} height={800}/>
            </div>
        </div>
    </div>
  )
}

export default Main