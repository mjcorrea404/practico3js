let ciudades = [];

while (true) {
  let ciudad = prompt("Nombre de la ciudad");

  if (ciudad === null || ciudad === "") {
    break;
  }

  ciudades.push(ciudad);
}
ciudades.push("paris")
ciudades[1]="Barcelona"

document.write(`<p>la longitud del arreglo es ${ciudades.length}</p>
<p>el primer pais es ${ciudades[0]}</p> 
<p>el segundo pais es ${ciudades[1]}</p>
<p>el tercer pais es ${ciudades[2]}</p>
<p>el ultimo pais es ${ciudades[ciudades.length - 1]}</p>
`);

