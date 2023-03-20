const num = parseInt(prompt("Ingrese un número"));


function crearTablaMultiplicar(num) {
  
  for (let i = 1; i <= 10; i++) {
    
    const resultado = num * i;
    
    document.write(num + "x" + i + " = " + resultado);
  }
}


crearTablaMultiplicar(num);