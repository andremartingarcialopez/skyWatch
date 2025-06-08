import { useWeatherStore } from '../store/store'

export default function WetaherInfo() {
    const { weatherData } = useWeatherStore()

    function formatTemp(temp: number) {
        const kelvin = 273.15;
        return parseInt((temp - kelvin).toString())
    }

    return (
        <div className='flex flex-col justify-center items-center space-y-4 p-5 m-2 glass mt-10 text-white text-shadow-md'>
            <h2 className='text-center text-4xl'>{weatherData.name}</h2>
            <p className='text-6xl font-black'>{formatTemp(weatherData.main.temp)}°C</p>

            <div className='flex flex-col lg:flex-row justify-around items-center w-full '>
                <p>Min: {formatTemp(weatherData.main.temp_min)}</p>
                <p>Max: {formatTemp(weatherData.main.temp_max)}</p>
                <p>Sensacion: {formatTemp(weatherData.main.feels_like)}</p>
                <p>Humedad: {weatherData.main.humidity}%</p>
            </div>
        </div>
    )
}
