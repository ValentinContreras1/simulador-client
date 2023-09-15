import React, { useState, useEffect } from 'react';

export const Consumo = () => {
    const [consumo, setConsumo] = useState(0);
    const [claseExtra, setClaseExtra] = useState('');

    // Función para generar un número aleatorio entre 0 y 100
    const generarNumeroAleatorio = () => {
        return Math.floor(Math.random() * 101);
    };

    // Función para sumar o restar un valor entre -5 y 5 cada segundo
    const actualizarConsumo = () => {
        setConsumo((prevConsumo) => {
        const delta = Math.floor(Math.random() * 11) - 5; // Número entre -5 y 5
        const nuevoConsumo = prevConsumo + delta;
        return Math.max(0, Math.min(100, nuevoConsumo)); // Limitar a un rango entre 0 y 100
        });
    };

    // Generar un número aleatorio inicial al montar el componente
    useEffect(() => {
        const numeroInicial = generarNumeroAleatorio();
        setConsumo(numeroInicial);
    }, []);

    // Actualizar el consumo y las clases según el valor de consumo
    useEffect(() => {
        actualizarConsumo();
        
        // Determinar las clases adicionales
        let nuevasClases = '';
        if (consumo > 50) {
        nuevasClases += ' bg-warning';
        }
        if (consumo > 75) {
        nuevasClases += ' bg-danger';
        }
        setClaseExtra(nuevasClases);
    }, [consumo]);

    // Generar un nuevo número aleatorio cada 5 segundos
    useEffect(() => {
        const intervaloAleatorio = setInterval(() => {
        const nuevoNumeroAleatorio = generarNumeroAleatorio();
        setConsumo(nuevoNumeroAleatorio);
        }, 5000);

        return () => {
        clearInterval(intervaloAleatorio);
        };
    }, []);


  
    return (
        <div class="progress col-9 m-2 float-end" role="progressbar" aria-label="Example with label" aria-valuenow={consumo} aria-valuemin="0" aria-valuemax="100">
            <div className={`progress-bar${claseExtra}`} style={{ width: `${consumo}%` }}>{consumo}%</div>
        </div>
    )
  }
