import api from "@/services/request";
import * as APIs from "@/utils/endpoints";
import { isResponseSuccess } from "@/utils/common";
import { CONFIG_NAME } from "@/utils/constants";

export default {
	namespaced: true,
	state() {
		return {
			user: {},
			accessToken: "",
		};
	},

	mutations: {
		setUser(_state, _data) {
			_state.user = _data;
		},
		setAccessToken(_state, _data) {
			_state.accessToken = _data;
		},
	},
	actions: {
		async getUser(context, params) {
			try {
				const result = await api.post(APIs.AUTH.AUTH, params);
				if (isResponseSuccess(result)) {
					console.log("result", result);
					context.commit("setUser", result.data.data.profile);
					context.commit("setAccessToken", result.data.data.accessToken);
					localStorage.setItem(CONFIG_NAME.ACCESS_TOKEN, result.data.data.accessToken);
					localStorage.setItem(
						CONFIG_NAME.REFRESH_TOKEN,
						result.data.data.refreshToken
					);
					return true;
				}
			} catch (e) {
				console.log("[getUser]", e)
			}
		},
	},
}
