import axios from "axios"
import store from "@/store/index";
import { CONFIG_NAME } from "@/utils/constants";

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
		this.api.interceptors.response.use(this.handleSuccess, this.handleError);
	}
	handleSuccess(response) {
		return response
	}
	async handleError(error) {
		const err = error.response.data.error;
		let config = error.response.config;
		if (err.code === 401 && err.type === 'AuthenticationError') {
			let refreshToken = localStorage.getItem(CONFIG_NAME.REFRESH_TOKEN);
			if (refreshToken) {
				await store.dispatch("auth/refreshToken", { refreshToken: refreshToken }).then(res => {
					if (res) {
						location.reload();
						return Promise.resolve(config);
						// để ntn thì api bị lỗi vẫn hiện trên request
						// config.headers['Authorization'] = `Bearer ${res}`
						// return axios.request(config)
					}
				})
			} else {
				return Promise.reject(error.response);
			}
		}
	}
	setToken(token) {
		this.api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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