/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/assets/css/variables.scss";
        @import "@/assets/css/style.scss";
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
