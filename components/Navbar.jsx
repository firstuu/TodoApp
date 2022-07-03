import React, { useState } from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

 const [nav, setNav] = useState(false)
 const navHandler = () =>{
  setNav(!nav)
 }

	return (
		<div className='w-full h-20  bg-blue-100'>
      {/* NavBar */}
			<div className=' w-full h-full flex justify-between items-center px-2 2xl:px-16'>
				<Link href='/'>
					<h1 className='text-3xl font-bold'>CarToDo</h1>
				</Link>
				<div>
					<ul className='md:flex hidden cursor-pointer'>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
						</Link>
						<Link href='/todo'>
							<li className='ml-10 text-sm uppercase hover:border-b'>ToDo</li>
						</Link>
						<Link href='/weather'>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Check Weather
							</li>
						</Link>
					</ul>
          <div className='md:hidden'>
            <AiOutlineMenu size={20} onClick={navHandler}/>
          </div>
				</div>
			</div>

      {/* menu */}
      <div className={nav? ' w-full h-screen left-0 top-0 bg-black/70 fixed z-10' : 'hidden'}>
        <div>
          <div className=' w-[60%] h-screen bg-white fixed '>
          <div className='right-0 top-0 absolute mr-2 mt-2'>
            <AiOutlineClose onClick={navHandler} size={25}/>
          </div>
          <ul className='mt-20 cursor-pointer'>
						<Link href='/'>
							<li className='pl-10 py-4 text-sm uppercase hover:border-b hover:bg-gray-100'>Home</li>
						</Link>
						<Link href='/todo'>
							<li className='pl-10 py-4 text-sm uppercase hover:border-b hover:bg-gray-100'>ToDo</li>
						</Link>
						<Link href='/weather'>
							<li className='pl-10 py-4 text-sm uppercase hover:border-b hover:bg-gray-100'>
								Check Weather
							</li>
						</Link>
					</ul>
         
          </div>
        </div>

      </div>

		</div>
	)
}

export default Navbar
