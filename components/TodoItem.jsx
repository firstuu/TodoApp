import React, { useState } from 'react'

const TodoItem = () => {
	const [todoItem, setTodoItem] = useState('')
	const [items, setItems] = useState([
		{
			id: Math.random(),
			title: 'clean car',
			done: false,
		},
	])

	const inputHandler = event => {
		setTodoItem(event.target.value)
	}
	const addHandler = () => {
		if (todoItem) {
			setItems([
				{
					id: Math.random(),
					title: todoItem,
					done: false,
				},
				...items,
			])
			setTodoItem('')
		}
	}

	return (
		<div className=' sm:h-[800px] border-2 rounded-2xl bg-gray-300 font-bold  mt-6 p-4 mx-4'>
			<div className='w-80 mx-auto flex flex-col items-center justify-center'>
				<label className='uppercase text-xl '>Title</label>
				<input
					className='border-2 rounded-lg p-3 flex border-gray-300 w-full mt-4'
					type='text'
					id='title'
					value={todoItem}
					onChange={inputHandler}
				/>
				<button
					onClick={addHandler}
					className=' p-4 mt-4 text-black border-2 border-gray-300 bg-white rounded-lg hover:bg-black hover:text-white'>
					Add
				</button>
			</div>

			{items.map(({ id, title }) => (
				<li
					className='text-lg cursor-pointer flex flex-col justify-center items-center my-6 py-4 border-2 w-60 mx-auto rounded-xl bg-blue-200'
					key={id}>
					{title}
				</li>
			))}
		</div>
	)
}

export default TodoItem
