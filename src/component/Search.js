import { useRef } from "react"
// import SearchCategory from "./SearchCategory"

import "../sass/search.scss"

//
export default function Search(props) {
	const ref = useRef(null)

	function handleSearch() {
		props.handleSearch(ref.current.value)
		ref.current.value = ""
	}

	return (
		<div className="search">
			<div className="search-bar">
				<div className="input-div">
					<input //
						className="input-control"
						type="text"
						ref={ref}
						placeholder="key word"
					/>
				</div>

				<button className="search-icon btn--primary" onClick={handleSearch}>
					<i className="fas fa-search "></i>
				</button>
			</div>
		</div>
	)
}
