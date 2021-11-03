import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductApi from '../api/productApi'
import '../sass/sectionMeals.scss'

export default function ListByCategory(props) {
	const { category, getInfo } = props
	const [meals, setMeals] = useState([])

	useEffect(() => {
		const getApi = async () => {
			try {
				const params = {
					c: category,
				}
				const response = await ProductApi.getByCategory(params)
				console.log(response)
				const { meals } = response
				setMeals(meals)
			} catch (error) {
				console.log('error')
			}
		}
		getApi()
	}, [category])

	const onGetInfo = (meal) => {
		getInfo(meal)
	}

	return (
		<div className='section'>
			<h3 className='section-heading'>Category: {category}</h3>
			<ul className='section-list'>
				{meals &&
					meals.map((meal, index) => (
						<li
							key={index}
							className='section-item'
							onClick={() => onGetInfo(meal)}>
							<Link to={`/recipe/${meal.idMeal}`}>
								<div className='section-item-img'>
									<img
										src={meal.strMealThumb}
										alt={meal.strMeal}
									/>
								</div>
								<div className='section-item-info'>
									<div className='detail'>
										<h3>{meal.strMeal}</h3>
										{/* <button className="btn">Learn more</button> */}
									</div>
								</div>
							</Link>
						</li>
					))}
			</ul>
		</div>
	)
}
