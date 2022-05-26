import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const opts = {
	theme: {
		dark: true,
		themes: {
			light: {
				primary: "#ffd700",
				secondary: "#424242",
				accent: "#82B1FF",
				error: "#FF5252",
				info: "#2196F3",
				success: "#4CAF50",
				warning: "#FFC107",
				anchor: "#1C3E3F",
				navi: "#ffffff", // f9fbfd
				backgroundPage: "#ffffff", // f9fbfd
			},
			dark: {
				primary: "#ffd700",
				secondary: "#424242",
				accent: "#FF4081",
				error: "#FF5252",
				info: "#2196F3",
				success: "#4CAF50",
				warning: "#FB8C00",
			},
		},
	},
};

export default new Vuetify(opts);
