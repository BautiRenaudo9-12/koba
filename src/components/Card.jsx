import React from 'react';
import "../SensorUltraSonico.css"
import moment from 'moment/moment';

export const Card = ({ sensorData }) => {
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
                    <span className="title">{sensorData.length > 0 ? sensorData[sensorData.length - 1].data + " meters" : "Wating data..."}</span>
                    <span className="text">
                        {sensorData.length > 0 ? "Timestamp: " + sensorData[sensorData.length - 1].time : "Wating data..."}
                    </span>
                </div>
            </div>
        </div>

    );
};
