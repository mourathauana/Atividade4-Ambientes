function calcularSomatorio(numeros) {
	let i = 0;
	let SomaNumeros = 0;
	while (i < numeros.length) {
		SomaNumeros = SomaNumeros + numeros[i];
		i = i + 1;
	}
	

	return SomaNumeros
}

module.exports = calcularSomatorio
