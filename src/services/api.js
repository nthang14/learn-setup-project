import axios from "axios"

export default () => {
  return axios.create({
		baseURL: "https://stg-api-sapplms.famtechvn.com/school",
		withCredentials: false,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	});
}