let resultados = [2,3,4,5,6,7,8,9,10,11,12]; 

for (let i = 0; i < 50; i++) {
  
  const dado1 = Math.floor(Math.random() * 6) + 1; 
  const dado2 = Math.floor(Math.random() * 6) + 1; 

  const suma = dado1 + dado2; 

  
  resultados[suma - 2]++;
}

document.write(resultados); 