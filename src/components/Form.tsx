
export default function Form() {
    return (
        <form className="glass p-5 mt-10 mx-2 flex flex-col justify-center items-stretch space-y-3">
            <div>
                <label className="font-semibold text-gray-800" htmlFor="city">Ciudad</label>
                <input className="w-full bg-white/50 rounded-lg px-1 py-1.5" type="text" placeholder="Nombre de la ciudad" />
            </div>

            <div>
                <label className="font-semibold text-gray-800" htmlFor="country">Pais</label>
                <select className="w-full bg-white/50 rounded-lg px-1 py-1.5" id="country">
                    <option value="">--Selecciona--</option>
                </select>
            </div>

            <input className="mt-3 bg-sky-600/70 text-white font-bold uppercase rounded-lg p-1 cursor-pointer hover:bg-blue-600/80 w-full" type="submit" value={"Consultar Clima"} />
        </form>




    )
}
