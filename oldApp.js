const request = require('request')

const url = 'https://api.darksky.net/forecast/0bd16d568e74c70ed969bbfa6aa8cfed/37.8267,-122.4233'

request({
    url: url
}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})