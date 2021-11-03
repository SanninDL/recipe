import axiosClient from './axiosClient'

class ProductApi {
	getAll = (params) => {
		const url = '/categories.php'
		return axiosClient.get(url, { params })
	}
	get = (params) => {
		const url = '/search.php'
		return axiosClient.get(url, { params })
	}
	getByCategory = (params) => {
		const url = '/filter.php'
		return axiosClient.get(url, { params })
	}
	getById = (params) => {
		const url = '/lookup.php'
		return axiosClient.get(url, { params })
	}
}
const productApi = new ProductApi()
export default productApi
