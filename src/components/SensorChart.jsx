import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import moment from 'moment/moment';

export const SensorChart = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    // Configuración del gráfico
    const chartConfig = {
        type: 'line',
        data: {
            labels: data.map((item, index) => item.time),
            datasets: [
                {
                    label: 'Datos del Sensor',
                    data: data.map((item, index) => item.data),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: [
                        "rgb(0, 255, 214)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Centímetros',
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: 'Timestamp',
                    },
                },
            },
        },
    };

    // Crear y actualizar el gráfico cuando se monta el componente o los datos cambian
    useEffect(() => {
        if (chartRef.current) {
            // Destruir el gráfico anterior si existe
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            // Crear un nuevo gráfico en el lienzo
            chartInstance.current = new Chart(chartRef.current, chartConfig);
        }
    }, [data]);

    return <canvas className='animate__animated animate__flipInX' style={{ marginTop: "200px", width: "400px" }} ref={chartRef} />;
};
