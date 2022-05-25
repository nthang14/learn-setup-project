import api from "@/services/api";
import * as APIs from "@/utils/endpoints";
import { isResponseSuccess } from "@/utils/common";
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
				const result = await api().post(APIs.AUTH.AUTH, params);
				if (isResponseSuccess(result)) {
					console.log("result", result);
					context.commit("setUser", result.data.data.profile);
					context.commit("setAccessToken", result.data.data.accessToken);
					localStorage.setItem("accessToken", result.data.data.accessToken);
					return true;
				}
			} catch (e) {
				console.log("[getUser]", e)
			}
		},
	},
}
