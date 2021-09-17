const axios = require('axios')
// globals
const url = 'https://nfttooltracker.herokuapp.com/collections'

async function getUser() {
	try {
		const response = await axios.get(url)
		console.log(response.data)
	} catch (error) {
		console.error(error)
	}
}
setInterval(() => {
	console.log('Hitting API')
	getUser()
}, 60000)
