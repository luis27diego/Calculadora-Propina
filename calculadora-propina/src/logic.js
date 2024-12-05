export function calcularPropina(montoRecibido, costoMesa) {
    if (montoRecibido < costoMesa) {
        const faltante = costoMesa - montoRecibido;
        return `Saldo insuficiente, faltan: ${faltante}`;
    }

    const sobrante = montoRecibido - costoMesa;
    return contarFrecuenciaPropina(sobrante);
}

function contarFrecuenciaPropina(sobrante) {
    const frecuencia = {};
    
    // Calcular frecuencia de billetes de 1000
    const miles = Math.floor(sobrante / 1000);
    if (miles > 0) frecuencia[1000] = miles;

    // Restante después de los miles
    sobrante %= 1000;

    // Calcular frecuencia de billetes de 100
    const centenas = Math.floor(sobrante / 100);
    if (centenas > 0) frecuencia[100] = centenas;

    // Restante final
    const restante = sobrante % 100;
    if (restante > 0) frecuencia[restante] = 1;

    return frecuencia;
}