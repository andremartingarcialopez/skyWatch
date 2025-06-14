
import { ErrorMessage } from "./components/ErrorMessage";
import Form from "./components/Form"
import Spinner from "./components/Spinner";
import WetaherInfo from "./components/WetaherInfo"
import { useWeatherStore } from "./store/store"

function App() {

  const { weatherData, spinner, notFound } = useWeatherStore();


  return (
    <>
      <header className="p-5 bg-white/10 shadow-white/50 shadow-lg backdrop-blur-xs border border-white/40 flex justify-center items-center gap-0.5">
        <h1 className="font-bold text-center text-4xl uppercase text-shadow-lg text-shadow-sky-700 text-white  ">Sky<span className="text-white">Watch</span></h1>

      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 mx-auto max-w-5xl">
        <Form />

        {spinner ? <Spinner /> : weatherData.name &&
          <WetaherInfo />
        }
        {notFound &&
          <ErrorMessage>
            <div className='bg-red-700/10 shadow-red-700/50 shadow-lg backdrop-blur-xs border border-red-700/40 rounded-xl mt-10 min-h-60 flex justify-center items-center m-2 '>
              <p className='font-bold text-white text-2xl uppercase'>Ciudad no econtrada</p>
            </div>
          </ErrorMessage>


        }



      </div>
    </>
  )
}

export default App
