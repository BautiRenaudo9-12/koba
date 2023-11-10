import './App.css'
import { Card } from './components/Card'
import { MQTTComponent } from './components/MQTTComponent'
import { useEffect } from 'react'
import "./Loader.css"
import { useState } from 'react'
import { SensorChart } from './components/SensorChart'
import 'animate.css';


function App() {
  const [sensorData, setSensorData] = useState([]);
  const [toggleButton, setToggleButton] = useState(true)
  const [numero, setNumero] = useState(10)


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

      <MQTTComponent sensorData={sensorData} setSensorData={setSensorData} />

      {
        toggleButton ? <Card sensorData={sensorData} /> : <SensorChart data={sensorData} />
      }
    </>
  )
}

export default App
