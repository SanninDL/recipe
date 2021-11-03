import React from 'react'
import { Link } from 'react-router-dom'

import '../sass/sectionMeals.scss'

export default function LastRecipes(props) {
	const { meals, getInfo } = props
	const onGetInfo = (meal) => {
		getInfo(meal)
	}

	return (
		<div className='section'>
			<div className='container'>
				<h3 className='section-heading'>Latest Recipes</h3>
				<ul className='section-list'>
					{meals &&
						meals.map((meal, index) => (
							<li key={index} onClick={() => onGetInfo(meal)}>
								<Link to={`/recipe/${meal.idMeal}`}>
									<div className='search-result-item'>
										<img
											src={meal.strMealThumb}
											alt={meal.strMeal}
										/>
										<h3>{meal.strMeal}</h3>
									</div>
								</Link>
							</li>
						))}
				</ul>
			</div>
		</div>
	)
}
