import { create } from "zustand";
import type { FormInputs } from "../types/types";
import axios from "axios";
import { SchemaWeather } from "../schemas/schemas";


export const useWeatherStore = create(() => ({

    fetchWeather: (formInputs: FormInputs) => {
        getWetaher(formInputs)
    }
}));

async function getWetaher(formInputs: FormInputs) {
    const APIKEY = "9b9d4089a4b2135994fbd0220963ed41";
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${formInputs.city},${formInputs.country}&appid=${APIKEY}`;
        const { data } = await axios(url);
        const result = SchemaWeather.safeParse(data);
        if (result.success) {
            console.log(result.data);
        }

    } catch (error) {
        console.log(error);
    }

}
