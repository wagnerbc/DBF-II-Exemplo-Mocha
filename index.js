var calculadora = require('./lib/calculadora');

var op = process.argv[2];
var val1 = parseFloat(process.argv[3]);
var val2 = parseFloat(process.argv[4]);

if (op == "sum"){
	console.log(calculadora.soma(val1, val2));
}else{
	if (op == "sub"){
		console.log(calculadora.subtracao(val1, val2));
	}else{
		if (op == "mult"){
			console.log(calculadora.multiplicacao(val1, val2));
		}else{
			if (op == "div"){
				console.log(calculadora.divisao(val1, val2));
			}else{
			console.error("Operacao desconhecida");
			}
		}
	}
}
