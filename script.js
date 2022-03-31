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

        warning.textContent = ""

        const wetherData = res.data
        console.log(wetherData);
        const temperatureValue = wetherData.main.temp.toFixed()
        const humidityValue = wetherData.main.humidity
        const status = Object.assign({}, ...wetherData.weather)
       

        cityName.textContent = wetherData.name
        temperatureText.textContent = temperatureValue + "°C"
        humidityText.textContent = humidityValue + "%"
        weather.textContent = status.main


        switch (true) {
            case 232 > status.id:
                photo.setAttribute('src', '/img/thunderstorm.png')
                break

            case 300 <= status.id && 321 >= status.id:
                photo.setAttribute('src', '/img/dizzle.png')
                break

            case 500 <= status.id && 351 >= status.id:
                photo.setAttribute('src', '/img/rain.png')
                break

            case 600 <= status.id && 622 >= status.id:
                photo.setAttribute('src', '/img/ice.png')
                break

            case 741 === status.id:
                photo.setAttribute('src', '/img/fog.png')
                break

            case 800 === status.id:
                photo.setAttribute('src', './img/sun.png')
                break

            case 801 <= status.id:
                photo.setAttribute('src', './img/cloud.png')
                break

            default:
                photo.setAttribute('src', '/img/unknown.png')
                break
        }

    }).catch(() => {
        warning.textContent = "Incorrect city name!"
    })
}

const enterCheck = (e) => {
    if(e.key === "Enter") {
        getWether()
    }
}
input.addEventListener("keyup", enterCheck)
button.addEventListener("click", getWether)