import React from 'react';
import "../SensorUltraSonico.css"

export const Card = ({ numero, animateName }) => {
    return (
        <div className={"parent animate__animated animate__flipInX"}>
            <div className="rojo-point"></div>
            <div className="card">
                <div className="logo">
                    <span className="circle circle1" />
                    <span className="circle circle2" />
                    <span className="circle circle3" />
                    <span className="circle circle4" />
                    <span className="circle circle5">
                        <svg
                            width={20}
                            viewBox="0 0 210 193"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width={150} height={153} fill="white" />
                            <rect x={182} y={21} width={28} height={111} fill="white" />
                        </svg>
                    </span>
                </div>
                <div className="glass" />
                <div className="content">
                    <span className="title">{numero} meters</span>
                    <span className="text">
                        Distance: {numero} m
                    </span>
                    <span className="text">
                        Tiempo de vuelo: 3800 µs
                    </span>
                    <span className="text">
                        Nivel de señal: {numero + Math.floor(Math.random() * (5 - -5 + 1)) + 5} dB
                    </span>
                    <span className="text">
                        Frecuencia de operación: {numero + Math.floor(Math.random() * (20 - -20 + 1)) + 20} kHz
                    </span>
                    <span className="text">
                        Ángulo de detección: 30 grados
                    </span>

                </div>
            </div>
        </div>

    );
};
