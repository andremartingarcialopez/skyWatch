import Form from "./components/Form"
import WetaherInfo from "./components/WetaherInfo"
import { useWeatherStore } from "./store/store"

function App() {

  const { weatherData } = useWeatherStore();


  return (
    <>
      <header className="p-5 glass-header flex justify-center items-center gap-0.5">
        <h1 className="font-bold text-center text-4xl uppercase text-shadow-lg text-shadow-sky-700 text-white  ">Sky<span className="text-white text-shadow-none">Watch</span></h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.00"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 18.004h-3.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99" />
            <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
          </svg>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 mx-auto max-w-5xl">
        <Form />
        {weatherData.name  &&
          <WetaherInfo />
        }

      </div>
    </>
  )
}

export default App
