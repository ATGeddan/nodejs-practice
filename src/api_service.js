const axios = require('axios').default

const getData = async (id, callback) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`

    try {
        const response = await axios.get(url)
        callback(response.data)
    } catch (e) {
        console.log('Error:', e)
    }
}

module.exports = getData 