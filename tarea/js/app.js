// Importaciones nombradas y por defecto
import { curso, estudiantes } from "./datos.js";
import reporte, { promedio, estado } from "./calculos.js";

// Copiar un objeto y un arreglo utilizando el Spread Operator (...)
const nuevoEstudiante = { ...estudiantes[0], nombre: "Ana María" };
const todosLosEstudiantes = [...estudiantes, nuevoEstudiante];

console.log(`Curso: ${curso}`);

// Obtener la lista del HTML
const listaHTML = document.querySelector("#reportes");

// Recorrer y renderizar resultados
todosLosEstudiantes.forEach((estudiante) => {
  const resultado = reporte(estudiante);

  // Imprimir en consola
  console.log(resultado);

  // Mostrar en la página HTML
  if (listaHTML) {
    listaHTML.innerHTML += `<li>${resultado}</li>`;
  }
});
