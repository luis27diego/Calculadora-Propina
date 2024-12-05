/* import React, { useState } from "react";
import { calcularPropina } from "../logic";
import ResultDisplay from "./ResultDisplay"; */
import "./../styles/Calculator.css";

import React, { useState } from "react";
import { calcularPropina } from "../logic";

const PropinaCalculator = () => {
    const [montoRecibido, setMontoRecibido] = useState("");
    const [costoMesa, setCostoMesa] = useState("");
    const [resultado, setResultado] = useState(null);
    const [diferencia, setDiferencia] = useState(null);

    const handleCalcular = () => {
        const resultado = calcularPropina(Number(montoRecibido), Number(costoMesa));
        const diferencia = Number(montoRecibido) - Number(costoMesa);
        setResultado(resultado);
        setDiferencia(diferencia);
    };

    const handleKeyDown = (e) => {
        // Si se presiona Enter en cualquier input, se llama a calcular
        if (e.key === 'Enter') {
            handleCalcular();
        }
    };

    return (
        <div className="calculator">
            <h1>Calculadora de Propinas</h1>
            <label>
                Monto Recibido
                <input
                    type="number"
                    value={montoRecibido}
                    onChange={(e) => setMontoRecibido(e.target.value)}
                    onKeyDown={handleKeyDown}  // Añadido manejador de teclas
                    placeholder="Ejemplo: 3000"
                />
            </label>
            <label>
                Costo de la Mesa
                <input
                    type="number"
                    value={costoMesa}
                    onChange={(e) => setCostoMesa(e.target.value)}
                    onKeyDown={handleKeyDown}  // Añadido manejador de teclas
                    placeholder="Ejemplo: 2200"
                />
            </label>
            <button onClick={handleCalcular}>Calcular</button>
            
            {resultado && (
                <div className="resultado">
                    <h3>Frecuencia de Billetes/Monedas:</h3>
                    <ul>
                        {Object.entries(resultado).map(([denominacion, cantidad]) => (
                            <li key={denominacion}>
                                {cantidad} de {denominacion}
                            </li>
                        ))}
                    </ul>
                    <h3>Diferencia:</h3>
                    <p>{diferencia >= 0 ? `Te sobra ${diferencia}` : `Te falta ${Math.abs(diferencia)}`}</p>
                </div>
            )}
        </div>
    );
};

export default PropinaCalculator;