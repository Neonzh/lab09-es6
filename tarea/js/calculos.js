// Función promedio utilizando Rest parameters
export const promedio = (...notas) => {
  const suma = notas.reduce((total, nota) => total + nota, 0);
  return suma / notas.length;
};

// Función estado utilizando parámetro por defecto
export const estado = (nota, minima = 13) => {
  return nota >= minima ? "Aprobado" : "Desaprobado";
};

// Función reporte utilizando desestructuración, Spread operator y Template Literals
export const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas); // Usamos spread operator en vez de apply
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};

// Exportación por defecto opcional para cumplir con el requerimiento de exportación default
export default reporte;
