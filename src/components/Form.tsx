import { useState } from "react";
import { countries } from "../data/data";
import { ErrorMessage } from "./ErrorMessage";
import { useWeatherStore } from "../store/store";
import type { FormInputs } from "../types/types";

export default function Form() {
    const { fetchWeather } = useWeatherStore()
    const [error, setError] = useState("")
    const [formInputs, setFormInputs] = useState<FormInputs>({
        city: "",
        country: ""
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (Object.values(formInputs).some(value => value.trim() == "")) {
            setError("Todos los campos son obligatorios");
            setTimeout(() => {
                setError("")
            }, 3000);
            return
        }
        fetchWeather(formInputs);
    };

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        setFormInputs({
            ...formInputs,
            [e.target.id]: e.target.value
        })
    }
    return (
        <form onSubmit={handleSubmit} className="glass p-5 mt-10 m-2 flex flex-col justify-center items-stretch min-h-40 space-y-3">
            <div>
                <label className="font-semibold text-gray-800" htmlFor="city">Ciudad</label>
                <input className="w-full bg-white/50 rounded-lg px-1 py-1.5"
                    id="city"
                    type="text"
                    placeholder="Nombre de la ciudad"
                    value={formInputs.city}
                    onChange={handleChange} />
            </div>

            <div>
                <label className="font-semibold text-gray-800" htmlFor="country">Pais</label>
                <select className="w-full bg-white/50 rounded-lg px-1 py-1.5"
                    id="country"
                    value={formInputs.country}
                    onChange={handleChange}>
                    <option value="">--Selecciona--</option>
                    {countries.map(function (country) {
                        return (
                            <option key={country.code} value={country.code}>{country.name}</option>
                        )
                    })}
                </select>
            </div>

            <input className="mt-3 bg-sky-600/70 text-white font-bold uppercase rounded-lg p-1 cursor-pointer hover:bg-blue-600/80 w-full" type="submit" value={"Consultar Clima"} />

            {error &&
                <ErrorMessage>
                    <p className="text-center border-t p-1 text-red-700 uppercase">
                        *{error}*
                    </p>
                </ErrorMessage>
            }
        </form>




    )
}
