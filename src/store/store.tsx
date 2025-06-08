import { create } from "zustand";
import type { FormInputs, Weather } from "../types/types";
import axios from "axios";
import { SchemaWeather } from "../schemas/schemas";
import { devtools } from "zustand/middleware";

type WeatherStoreTypes = {
    weatherData: Weather
    fetchWeather: (formInputs: FormInputs) => Promise<void>
}

export const useWeatherStore = create<WeatherStoreTypes>()(
    devtools((set) => ({
        weatherData: {
            name: "",
            main: {
                feels_like: 0,
                temp_max: 0,
                temp_min: 0,
                temp: 0,
                humidity: 0
            }
        },
        fetchWeather: async (formInputs: FormInputs) => {
            const result = await getWetaher(formInputs);
            set((state) => ({
                ...state,
                weatherData: result
            }))

        }

    })));

async function getWetaher(formInputs: FormInputs) {
    const APIKEY = "9b9d4089a4b2135994fbd0220963ed41";
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${formInputs.city},${formInputs.country}&appid=${APIKEY}`;
        const { data } = await axios(url);
        const result = SchemaWeather.safeParse(data);
        if (result.success) {
            return result.data;
        }

    } catch (error) {
        console.log(error);
    }

}
