
let ciudades = [];


while (true) {
  let ciudad = prompt("Nombre de la ciudad");
  
  
  if (ciudad === null || ciudad === "") {
    break;
  }
  
  
  ciudades.push(‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’);

}


document.write(ciudades);