import { useState, useEffect } from 'react'
import Header from './Header'
import ListByCategory from './ListByCategory'
import Search from './Search'
import SearchCategory from './SearchCategory'
import SectionMeals from './SectionMeals'
import List from './List'

export default function Home(props) {
	const { getInfo } = props
	const [query, setQuery] = useState('')
	const [category, setCategory] = useState('')
	const [isSearch, setIsSearch] = useState(false)

	const onGetInfo = (meal) => {
		console.log(meal)
		getInfo(meal)
	}

	const handleSearch = (query) => {
		setIsSearch(true)
		setQuery(query)
		console.log(query)
	}

	const getCategory = (name) => {
		console.log(name)
		setCategory(name)
		setIsSearch(true)
	}

	return (
		<>
			<div className='wrap-main container'>
				<div className='left-content'>
					{category === '' ? (
						''
					) : (
						<ListByCategory
							category={category}
							getInfo={onGetInfo}
						/>
					)}
					{isSearch && <List query={query} getInfo={onGetInfo} />}
					{<SectionMeals getInfo={onGetInfo} />}
				</div>
				<div className='right-content'>
					<Search handleSearch={handleSearch} />
					<SearchCategory getCategory={getCategory} />
				</div>
			</div>
		</>
	)
}
