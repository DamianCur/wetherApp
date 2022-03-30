const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')


const apiLink = "https://api.openweathermap.org/data/2.5/weather?q="
const apiKey = '&appid=fe2c049daff6932a9c53869c926ddc78'
const apiUnits = '&units=metric'

const getWether = () => {
    const city = input.value
    const URL = `${apiLink}${city}${apiKey}${apiUnits}`
}