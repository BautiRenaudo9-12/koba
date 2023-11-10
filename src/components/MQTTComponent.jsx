import React, { useState, useEffect } from 'react';
import { Client } from 'paho-mqtt';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import moment from 'moment/moment';

const MQTT_SERVER = '10.0.3.201';
const MQTT_PORT = 8083;
const MQTT_TOPIC = 'ultrasonico';

export const MQTTComponent = ({ sensorData, setSensorData }) => {

  useEffect(() => {
    // Conéctate al servidor MQTT
    const client = new Client(`mqtt://${MQTT_SERVER}:${MQTT_PORT}/mqtt`, "");

    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    client.connect({ onSuccess: onConnect });

    function onConnect() {
      console.log("Conectado al servidor MQTT");
      client.subscribe(MQTT_TOPIC);
      Toastify({
        text: "Conectado al servidor",
        duration: 3000,
        backgroundColor: "linear-gradient(135deg, rgb(0, 255, 214) 0%, rgb(8, 226, 96) 100%)",
        style: {
          color: "#00894d",
          fontWeight: "900"
        }

      }).showToast();
    }

    function onConnectionLost(responseObject) {
      if (responseObject.errorCode !== 0) {
        console.log("Conexión perdida: " + responseObject.errorMessage);
      }
    }

    function onMessageArrived(message) {
      const data = message.payloadString;
      const time = moment().format("hh:mm")
      // Agrega los nuevos datos al gráfico
      setSensorData(prevSensorData => [...prevSensorData, { time, data }])
    }
  }, []);

  const bars = sensorData.map((dataPoint, index) => (
    <div
      key={index}
      style={{
        height: dataPoint.valor * 10 + 'px',
        width: '20px',
        backgroundColor: 'blue',
        margin: '5px',
      }}
    ></div>
  ));

  return (
    <div>
      <div style={{ display: 'flex' }}>{bars}</div>
    </div>
  );
};
