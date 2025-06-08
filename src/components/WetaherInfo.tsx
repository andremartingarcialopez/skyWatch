import clsx from 'clsx';
import { useWeatherStore } from '../store/store'

export default function WetaherInfo() {
    const { weatherData } = useWeatherStore()

    function formatTemp(temp: number) {
        const kelvin = 273.15;
        return parseInt((temp - kelvin).toString())
    }



    return (
        <div className={clsx(
            formatTemp(weatherData.main.temp) < 10 && 'glass-extreme-cold',
            formatTemp(weatherData.main.temp) >= 10 && formatTemp(weatherData.main.temp) <= 17 && 'glass-cold',
            formatTemp(weatherData.main.temp) > 17 && formatTemp(weatherData.main.temp) <= 24 && 'glass',
            formatTemp(weatherData.main.temp) >= 25 && formatTemp(weatherData.main.temp) <= 30 && 'glass-hot',
            formatTemp(weatherData.main.temp) > 30 && 'glass-extreme-hot',
            'flex flex-col justify-center items-center space-y-4 p-5 m-2 mt-10 text-white text-shadow-md'
        )}>
            <h2 className='text-center text-4xl'>{weatherData.name}</h2>
            <p className='text-6xl font-black'>{formatTemp(weatherData.main.temp)}°C</p>

            <div className='flex flex-col lg:flex-row justify-around items-center w-full '>
                <p>Min: {formatTemp(weatherData.main.temp_min)}°C</p>
                <p>Max: {formatTemp(weatherData.main.temp_max)}°C</p>
                <p>Sensacion: {formatTemp(weatherData.main.feels_like)}°C</p>
                <p>Humedad: {weatherData.main.humidity}%</p>
            </div>
        </div>
    )
}
