import './App.css'
import { Card } from './components/Card'
import { MQTTComponent } from './components/MQTTComponent'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useEffect } from 'react'
import "./Loader.css"
import { useState } from 'react'
import { SensorChart } from './components/SensorChart'
import 'animate.css';

const exampleSensorData = [
  { timestamp: '10:00', value: 25 },
  { timestamp: '10:15', value: 28 },
  { timestamp: '10:30', value: 22 },
  { timestamp: '10:45', value: 24 },
  { timestamp: '11:00', value: 26 },
];

function App() {
  const [sensorData, setSensorData] = useState([]);
  const [toggleButton, setToggleButton] = useState(true)
  const [numero, setNumero] = useState(10)

  useEffect(() => {
    Toastify({
      text: "Conectado al servidor",
      duration: 3000,
      backgroundColor: "linear-gradient(135deg, rgb(0, 255, 214) 0%, rgb(8, 226, 96) 100%)",
      style: {
        color: "#00894d",
        fontWeight: "900"
      }

    }).showToast();

    setInterval(() => {
      setNumero((prevNumero) => {
        return prevNumero > 25 ? prevNumero - 20 : prevNumero + 5
      })
    }, 2500)
  }, [])

  return (
    <>
      <div className="loader">
        <p className="text">
          SENSOR <br /> ULTRASONICO
        </p>
      </div>

      <div className="div">
        <label className="switch-button" htmlFor="switch">
          <div className="switch-outer" >
            <input id="switch" type="checkbox" onClick={() => {
              setToggleButton(!toggleButton)
            }} />
            <div className="button">
              <span className="button-toggle"></span>
              <span className="button-indicator"></span>
            </div>
          </div>
        </label>
      </div>

      {
        toggleButton ? <Card numero={numero} /> : <SensorChart data={exampleSensorData}/>
      }
    </>
  )
}

export default App
