import React, { useState, useEffect } from 'react';
import { Client } from 'paho-mqtt';

const MQTT_SERVER = '10.0.3.201';
const MQTT_PORT = 1883;
const MQTT_TOPIC = 'tu_topic_aqui'; // Reemplaza 'tu_topic_aqui' con el topic específico del sensor que estás utilizando

export const MQTTComponent = ({sensorData, setSensorData}) => {

  useEffect(() => {
    const client = new Client({ 
      broker: `ws://${MQTT_SERVER}:${MQTT_PORT}/mqtt`,
      clientId: 'clientId_' + parseInt(Math.random() * 100, 10),
    });

    const onConnectionLost = (responseObject) => {
      if (responseObject.errorCode !== 0) {
        console.log('Conexión perdida: ' + responseObject.errorMessage);
      }
    };

    const onMessageArrived = (message) => {
      const data = JSON.parse(message.payloadString);
      setSensorData((prevData) => [...prevData, data]);
    };

    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    client.connect({
      onSuccess: () => {
        console.log('Conexión establecida con el servidor MQTT.');
        client.subscribe(MQTT_TOPIC);
      },
      useSSL: false,
    });

    return () => {
      client.disconnect();
      console.log('Conexión cerrada.');
    };
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
      <h1>Sensor Data Visualization</h1>
      <div style={{ display: 'flex' }}>{bars}</div>
    </div>
  );
};
