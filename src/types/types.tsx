export type Country = {
    code: string;
    name: string;
}
export type FormInputs = {
    city: string;
    country: string;
}

export type Weather = {
    name: string,
    main: {
        feels_like: number,
        temp_max: number,
        temp_min: number,
        temp: number,
        humidity: number
    }
}