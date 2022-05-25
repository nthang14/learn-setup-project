import Vue from "vue";
import Vuex from "vuex";

import auth from "@/store/modules/auth"
import student from "@/store/modules/student";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		auth: auth,
		student,
	},
});
