const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperatureText = document.querySelector('.temperature')
const humidityText = document.querySelector('.humidity')


const apiLink = "https://api.openweathermap.org/data/2.5/weather?q="
const apiKey = '&appid=fe2c049daff6932a9c53869c926ddc78'
const apiUnits = '&units=metric'

const getWether = () => {
    const city = input.value || 'Warsaw'
    const URL = `${apiLink}${city}${apiKey}${apiUnits}`

    axios.get(URL).then(res => {

        const wetherData = res.data
        console.log(wetherData);
        const temperatureValue = wetherData.main.temp.toFixed()
        const humidityValue = wetherData.main.humidity

        cityName.textContent = wetherData.name
        temperatureText.textContent = temperatureValue + "°C"
        humidityText.textContent = humidityValue + "%"

    })
}

getWether()