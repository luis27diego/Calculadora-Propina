import React from "react";

const FrequencyList = ({ frecuencia }) => {
    return (
        <ul>
            {Object.entries(frecuencia).map(([denominacion, cantidad]) => (
                <li key={denominacion}>
                    {cantidad} de {denominacion}
                </li>
            ))}
        </ul>
    );
};

export default FrequencyList;
