import clsx from 'clsx';
import { useWeatherStore } from '../store/store'



export default function WetaherInfo() {
    const { weatherData,  } = useWeatherStore()


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
        <>
{/*             {notFound &&
                <ErrorMessage>
                    <div className='glass-extreme-hot mt-10 h-full flex justify-center items-center m-2'>
                        <p className='font-bold text-white text-2xl uppercase'>Ciudad no econtrada</p>
                    </div>
                </ErrorMessage>
            } */}

            <div className={clsx(
                temp < 10 && 'bg-blue-700/10 shadow-blue-700/50 shadow-lg backdrop-blur-xs border border-blue-700/40 rounded-xl',
                temp >= 10 && temp <= 17 && 'bg-sky-600/10 shadow-sky-600/50 shadow-lg backdrop-blur-xs border border-sky-600/40 rounded-xl',
                temp > 17 && temp <= 24 && 'bg-white/10 shadow-white/50 shadow-lg backdrop-blur-xs border border-white/40 rounded-xl',
                temp >= 25 && temp <= 30 && 'bg-yellow-500/10 shadow-yellow-500/50 shadow-lg backdrop-blur-xs border border-yellow-500/40 rounded-xl',
                temp > 30 && 'bg-red-600/10 shadow-red-bg-red-600/50 shadow-lg backdrop-blur-xs border border-red-600/40 rounded-xl',
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
        </>
    )
}
