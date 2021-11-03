import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductApi from '../api/productApi'
import '../sass/sectionMeals.scss'

export default function SectionMeals(props) {
	const { getInfo } = props
	const [meals, setMeals] = useState([])

	useEffect(() => {
		const getApi = async () => {
			try {
				const params = {
					f: 'b',
				}
				const response = await ProductApi.get(params)
				console.log(response)
				const { meals } = response

				setMeals(meals.splice(0, 6))
			} catch (error) {
				console.log('error')
			}
		}
		getApi()
	}, [])

	const onGetInfo = (meal) => {
		getInfo(meal)
	}
	return (
		<div className='section'>
			<h3 className='section-heading'>Popular Recipes</h3>
			<ul className='section-list'>
				{meals &&
					meals.map((meal, index) => (
						<li key={index} onClick={() => onGetInfo(meal)}>
							<Link to={`/recipe/${meal.idMeal}`}>
								<div className='section-item'>
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

											<span className='tags'>
												<strong>Tags : </strong>{' '}
												{meal.strTags
													.split(',')
													.join(' ')}
											</span>
										</div>
									</div>
								</div>
							</Link>
						</li>
					))}
			</ul>
		</div>
	)
}
