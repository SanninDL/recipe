import React, { useEffect, useState } from "react"
import productApi from "../api/productApi"
import "../sass/searchList.scss"

export default function List(props) {
	const [meals, setMeals] = useState([])
	console.log("query ", props.query)

	useEffect(() => {
		const getApi = async () => {
			try {
				const params = {
					s: props.query,
				}
				const respone = await productApi.get(params)

				const { meals } = respone
				setMeals(meals)
			} catch (error) {
				console.log("error")
			}
		}

		getApi()
	}, [props.query])

	function getInfo(meal) {
		props.getInfo(meal)
	}

	return (
		<div className="container">
			<div className="search-result">
				<h3 className="search-result-heading">Search result</h3>
				<ul className="search-result-list">
					{meals &&
						meals.map((meal, index) => (
							<li key={index} className="search-result-item" onClick={() => getInfo(meal)}>
								<img src={meal.strMealThumb} alt={meal.strMeal} />
								<h3>{meal.strMeal}</h3>
							</li>
						))}
				</ul>
			</div>
		</div>
	)
}
