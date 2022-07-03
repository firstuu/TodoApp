import React from 'react'
import TodoItem from '../components/TodoItem'

const todo = () => {
	return (
		<div className='w-full h-full bg-red-100'>
			<div className=' max-w-[1240px] h-screen mx-auto pt-4'>
                <TodoItem/>
				
			</div>
		</div>
	)
}

export default todo
