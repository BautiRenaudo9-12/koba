import React, { useState, useEffect } from 'react';
import { Client } from 'paho-mqtt';

export const MQTTForm = () => {
    const [ip, setIp] = useState('');
    const [topic, setTopic] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        /*const client = new Client({
            mqttVersion: 4, // Usar la versión 4 de MQTT
            hostname: ip,    // Asegúrate de que `ip` contenga la dirección IP correcta del servidor MQTT
            port: 9001,      // Puerto del servidor MQTT (ajústalo según la configuración del servidor)
            clientId: 'mqtt-client',
            username: user,
            password: password,
            protocol: 'wss', // Usar WebSockets seguros (opcional)
        });*/

        //client.connect({ onSuccess: () => console.log('Connected to MQTT server') });

        return () => {
            //client.disconnect();
        };
    }, [ip, user, password]);

    return (
        <div>
            <input type="text" placeholder="IP" value={ip} onChange={(e) => setIp(e.target.value)} />
            <input type="text" placeholder="Topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
            <input type="text" placeholder="User" value={user} onChange={(e) => setUser(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
    );
}
