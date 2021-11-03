import './App.css'

import { useState, useEffect } from 'react'
import Header from './component/Header'
import LastRecipes from './component/LastRecipes'
import Meal from './component/Meal'
import Home from './component/Home'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from 'react-router-dom'

function App() {
	const [myMeals, setMyMeals] = useState([])
	const [mealId, setMealID] = useState({})

	useEffect(() => {
		const mymeal = JSON.parse(localStorage.getItem('myMeals')) || []

		setMyMeals(mymeal)
	}, [])

	const getInfo = (meal) => {
		console.log('setMealIDd ', meal.idMeal)
		setMealID(meal.idMeal)
	}
	const addMeal = (meal) => {
		console.log(myMeals)
		console.log(meal)
		meal.isAdd = true
		const newMyMeals = [...myMeals, meal]

		console.log('🚀 ~ newMyMeals', newMyMeals)

		setMyMeals(newMyMeals)

		var string = JSON.stringify(newMyMeals)
		console.log('~ string', string)

		localStorage.setItem('myMeals', string)
	}
	console.log('mymeals ', myMeals)
	return (
		<Router>
			<div className='app'>
				<Header />

				<Switch>
					<Route exact path='/'>
						<Home getInfo={getInfo} />
					</Route>

					<Route path='/myrecipe'>
						<LastRecipes meals={myMeals} getInfo={getInfo} />
					</Route>
					<Route path={`/recipe/:mealId`}>
						<Meal mealId={mealId} addMeal={addMeal} />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
