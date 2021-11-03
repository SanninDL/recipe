import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from 'react-router-dom'
import logo from '../img/logo.png'
import '../sass/header.scss'

function Header(props) {
	return (
		<div className='container'>
			<header className='header-container'>
				<div className='header'>
					<div className='header-logo'>
						<img src={logo} alt='logo' />
					</div>
					<ul className='header-nav'>
						<li className='nav-item'>
							<Link to='/'>Home</Link>
						</li>
						<li className='nav-item'>
							<Link to='/myrecipe'>My Recipes</Link>
						</li>
					</ul>
				</div>
			</header>
		</div>
	)
}

export default Header
