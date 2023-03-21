let base = prompt("Ingrese la base del rectángulo:");
		let altura = prompt("Ingrese la altura del rectángulo:");

		
		base = Number(base);
		altura = Number(altura);

		
		function calcularPerimetroRectangulo(base, altura) {
			let perimetro = 2 * (base + altura);
			return perimetro;
		}

		
		let resultado = calcularPerimetroRectangulo(base, altura);
		document.write("El perímetro del rectángulo es: " + resultado);