import axios from "axios";
const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 8000,
	headers: {
		Accept: 'application/json',
		'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
		'x-rapidapi-key': '<your-key-here>',
	},
});
export default instance;