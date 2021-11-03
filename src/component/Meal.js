import '../sass/meal.scss'
import { useEffect, useState } from 'react'
import productApi from '../api/productApi'

import { useParams } from 'react-router-dom'

export default function Meal(props) {
	let { mealId } = useParams()

	const { addMeal } = props
	const [meal, setMeal] = useState({})
	const ingredientsEle = []

	console.log('add ', meal.isAdd)
	useEffect(() => {
		const getApi = async () => {
			try {
				const params = {
					i: mealId,
				}
				const response = await productApi.getById(params)
				console.log(response)
				const { meals } = response
				setMeal(meals[0])
			} catch (error) {
				console.log('error')
			}
		}
		getApi()
	}, [mealId])

	for (var i = 1; i <= 20; i++) {
		var key = `strIngredient${i}`
		var key2 = `strMeasure${i}`

		if (meal[key] && meal[key] !== '') {
			var ele = (
				<li key={i}>
					<span>{meal[key]} </span>: {meal[key2]}
				</li>
			)
			ingredientsEle.push(ele)
		}
	}

	const onAddMeal = () => {
		addMeal(meal)
	}
	return (
		<div className='container'>
			{meal && meal !== {} && (
				<div className='meal-container'>
					<div className='meal-heading'>
						<h1>{meal.strMeal}</h1>
						<button className='btn--primary' onClick={onAddMeal}>
							{meal.isAdd ? (
								<span>
									<i className='fas fa-check'></i> My Recipe
								</span>
							) : (
								<span>
									<i className='fas fa-plus'></i>
									Add to my recipe
								</span>
							)}
						</button>
					</div>
					<div className='meal'>
						<div className='meal-img'>
							<img src={meal?.strMealThumb} alt='' />
						</div>
						<div className='meal-ingredients'>
							<h4>Ingredients</h4>
							<ul className='meal-ingredients-list'>
								{ingredientsEle}
							</ul>
						</div>
					</div>
					<div className='meal-steps'>
						<div className='meal-steps-heading'>
							<h4>Instructions</h4>
							<a
								className='btn--primary'
								rel='noopener noreferrer'
								target='_blank'
								href={meal.strYoutube}>
								Watch on Youtube
							</a>
						</div>
						{meal.strInstructions}
					</div>
				</div>
			)}
		</div>
	)
}
