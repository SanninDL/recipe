import { useState, useEffect } from "react"
import productApi from "../api/productApi"
import "../sass/search.scss"

export default function SearchCategory(props) {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		async function getApi() {
			try {
				const respone = await productApi.getAll()
				const { categories } = respone
				setCategories(categories.splice(0, 5))
			} catch (error) {
				console.log("error ", error)
			}
		}
		getApi()
	}, [])

	const onGetCategory = (name) => {
		props.getCategory(name)
	}

	return (
		<ul className="search-category">
			{categories &&
				categories.map((item, index) => (
					<li key={index} className="category-item" onClick={() => onGetCategory(item.strCategory)}>
						<span>{item.strCategory}</span>
						<img className="category-item-img" src={item.strCategoryThumb} alt={item.strCategory} />
					</li>
				))}
		</ul>
	)
}
