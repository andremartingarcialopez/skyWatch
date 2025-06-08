import clsx from 'clsx';
import { useWeatherStore } from '../store/store'

export default function WetaherInfo() {
    const { weatherData } = useWeatherStore()

    function formatTemp(temp: number) {
        const kelvin = 273.15;
        return parseInt((temp - kelvin).toString())
    }

    const temp = formatTemp(weatherData.main.temp);
    let wetaherDescription = '';
    if (temp < 10) wetaherDescription = 'Muy frío';
    else if (temp >= 10 && temp <= 17) wetaherDescription = 'Frío';
    else if (temp > 17 && temp <= 24) wetaherDescription = 'Agradable';
    else if (temp >= 25 && temp <= 30) wetaherDescription = 'Caluroso';
    else if (temp > 30) wetaherDescription = 'Muy Caluroso';

    return (
        <div className={clsx(
            temp < 10 && 'glass-extreme-cold',
            temp >= 10 && temp <= 17 && 'glass-cold',
            temp > 17 && temp <= 24 && 'glass',
            temp >= 25 && temp <= 30 && 'glass-hot',
            temp > 30 && 'glass-extreme-hot',
            'flex flex-col justify-center items-center space-y-4 p-5 m-2 mt-10 text-white text-shadow-md'
        )}>
            <h2 className='text-center text-4xl'>{weatherData.name}</h2>
            <p className='text-6xl font-black'>{formatTemp(weatherData.main.temp)}°C</p>

            <div className='flex flex-col lg:flex-row justify-around items-center space-y-2 lg:space-y-0 w-full '>
                <p>Min: {formatTemp(weatherData.main.temp_min)}°C</p>
                <p>Max: {formatTemp(weatherData.main.temp_max)}°C</p>
                <p>Sensacion: {formatTemp(weatherData.main.feels_like)}°C</p>
                <p>Humedad: {weatherData.main.humidity}%</p>
            </div>

                <p>Descripción de clima: {wetaherDescription}</p>
        </div>
    )
}
