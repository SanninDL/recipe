import { useState, useEffect } from "react"

export default function useGetApi(query) {
	const [data, setData] = useState([])

	useEffect(() => {
		async function getApi() {
			console.log()
			try {
				const respone = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
				const responeJson = await respone.json()

				const { meals } = responeJson
				console.log("🚀 ~ meals 1", meals)

				setData([...meals, meals])
			} catch (error) {
				console.log("error1 ", error)
			}
			try {
				const respone = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=${query}`)
				const responeJson = await respone.json()
				console.log(responeJson)
				const { meals } = responeJson
				console.log("🚀 ~ meals 2", meals)

				setData([...meals, meals])
			} catch (error) {
				console.log("error2 ", error)
			}
		}
		getApi()
	}, [])

	return data
}
