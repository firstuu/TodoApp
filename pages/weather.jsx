import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Image from 'next/image'


import axios from 'axios'

const weather = () => {
	const [city, setCity] = useState('')
	const [temp, setTemp] = useState("")
	const [weather, setWeather] = useState({})
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

	const fetchWeather = e => {
		e.preventDefault()

		axios.get(url).then(response => {
			setWeather(response.data)
            setTemp("°C")
		})
		setCity('')
        
        
	}

  

	return (
		<div className='w-full h-full'>
			<div className='max-w-[1240px] h-[700px] lg:mx-auto bg-blue-200 rounded-md my-16 flex flex-col justify-start  items-center mx-12'>
				<div className='mt-10'>
					<label className='text-xl mr-4 flex items-center justify-center'>
						{' '}
						Chose City
					</label>
					<input
						onChange={e => setCity(e.target.value)}
						type='text'
						className='border-2 rounded-xl w-64 mt-4 shadow-xl shadow-blue-300 px-4 '
						placeholder='Warsaw'
					/>
					<button className='p-2 translate-y-1' onClick={fetchWeather}>
						<BsSearch size={20} />
					</button>
				</div>
				<div className='flex justify-between'>
					<h1 className='sm:text-2xl font-bold p-4'>{weather.name}</h1>
					<h1 className='sm:text-2xl font-bold p-4'>{weather.main?.temp.toFixed()}{temp}</h1>
				</div>

				{weather.main?.temp > 15 && (
					<div className='sm:text-2xl font-bold p-4 flex flex-col justify-center items-center'>
						<p className='mb-2 text-red-500'>
							Warmth, you can easily work with the car, taking care of the sun
						</p>
						<Image src={'/../public/sunny.jpg'} width={600} height={400} />
					</div>
				)}
				{weather.main?.temp < 15 && (
					<div className='sm:text-2xl font-bold p-4 flex flex-col justify-center items-center'>
						<p className='mb-2 text-green-400'>
							dress appropriately if you want to work on a car
						</p>
						<Image src={'/../public/cloudy.jpg'} width={600} height={400} />
					</div>
				)}
				{weather.main?.temp <= 0 && (
					<div className='sm:text-2xl font-bold p-4 flex flex-col justify-center items-center'>
						<p className='mb-2 text-blue-900'>it's cold, dress warm</p>
						<Image src={'/../public/cold.jpg'} width={600} height={400} />
					</div>
				)}
			</div>
		</div>
	)
}
export default weather
