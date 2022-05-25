import api from '@/services/api'
import * as APIs from '@/utils/endpoints'
import { isResponseSuccess } from '@/utils/common'

export default {
	namespaced: true,
	state() {
		return {
			student: [],
			paging: {},
		};
	},
	mutations: {},
	actions: {
		async getStudent(context, params) {
			try {
				const result = await api().get(APIs.STUDENT, params);
				if (isResponseSuccess(result)) {
					console.log("result");
				}
			} catch (e) {
				console.log("[getStudent]", e);
			}
		},
	},
};