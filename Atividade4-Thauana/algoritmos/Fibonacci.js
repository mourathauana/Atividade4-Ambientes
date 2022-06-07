function fibonacci(Numeros) {
	var valor1 = 0;
	var valor2 = 1;
	var valor3;

	lista = [0, 1]

	for (i = 3; i <= Numeros; i++)
	{
		valor3 = valor1 + valor2;
		lista.push(valor3)

		valor1 = valor2;
		valor2 = valor3;
	}

	return lista
}

module.exports = fibonacci