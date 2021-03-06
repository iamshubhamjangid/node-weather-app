const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f3a5d85778e275c04ec9aae6bf298a86&query='+latitude+','+longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body)
            callback(undefined, body.current.weather_descriptions[0] + 'Weather ! It is currently ' + body.current.temperature + ' degress out. There is + '+body.current.humidity + 'Humity and ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast