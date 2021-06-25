const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
.then(async (response) => {
    let data = await response.json()
    console.log(data.map((data) => {return data.name}))
})