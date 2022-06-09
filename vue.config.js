/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/assets/scss/variables.scss";
        @import "@/assets/scss/style.scss";
        `,
			},
		},
	},
	devServer: {
		// disableHostCheck: true,
		// host: '0.0.0.0',
		// port: 8081,
	},
	// publicPath: "/admin",
};
