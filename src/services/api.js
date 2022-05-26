import axios from "axios"
export default class API_CONFIG {
	api = null;
	constructor() {
		this.api = axios.create({
			baseURL: "https://stg-api-sapplms.famtechvn.com/school",
			withCredentials: false,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		this.api.interceptors.response.use();
	}
	handleSuccess(response) {
		console.log("response", response);
	}
	handleError(error) {
		console.log("error", error);
	}
	setToken(token) {
		this.api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		// this.api.defaults.headers.common["x-access-token"] = token;
	}
	setRenewToken(token) {
		this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}
	get(path, params) {
		return this.api.get(path, params);
	}
	post(path, payload) {
		return this.api.request({
			method: "POST",
			url: path,
			responseType: "json",
			data: payload,
		});
	}
	put(path, payload) {
		return this.api.request({
			method: "PUT",
			url: path,
			responseType: "json",
			data: payload,
		});
	}
	patch(path, payload) {
		return this.api.request({
			method: "PATCH",
			url: path,
			responseType: "json",
			data: payload,
		});
	}
	delete(path, payload) {
		return this.api.request({
			method: "DELETE",
			url: path,
			responseType: "json",
			data: payload,
		});
	}
}