const express = require('express');
const bodyParser = require('body-parser')
const request = require('request')


const app = express()

const apiKey = '33e63ec14219928c2e51bca73db34c5e';

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { weather: null, error: null })
})

app.post('/', function (req, res) {
    let city = req.body.city
    let url = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}}"
    console.log(req.body.city)
    request(url, function (err, response, body) {
        if (err) {
            res.render('index', { weather: null, error: 'Error, Please try again' })
        } else {
            let weather = JSON.parse(body)
            if (weather.main == undefined) {
                res.render('index', {
                    weather: null,
                    error: 'Error, Please try again later'
                })
            } else {
                let weatherText = `it's ${weather.main.temp} degree celsium with ${weather.weather[0].main} in  ${weather.city}`
                res.render('index', {
                    weatherText: weatherText, error: null
                })
                console.log('body:', body)
            }
        }

    })
})

app.listen(3000, function (req, res) {
    console.log('Weather app listening on port 3000 ')
})
