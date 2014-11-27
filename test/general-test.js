// Vamos usar a lib assert, que já
// vem no core do Node.js
var assert = require('assert');
// E também vamos incluir a lib
// da calculadora, que criaremos mais tarde
var calculadora = require("../lib/calculadora");
// Descrevemos um tópico inicial usando
// o método describe() do Mocha
describe('Testes gerais da calculadora', function(){
    // Dentro do tópico criamos os testes relacionados
    // aos mesmos, fazemos isso usando o método it()
    it('A calculadora deve ter quatro funcionalidades (soma, subtracao, multiplicacao, divisao)', function(){
        // Usamos o assert.equal() para verificar se
        // o tipo da variável 'calculadora' realmente
        // é uma função

        assert.equal(typeof calculadora.soma, 'function');
        assert.equal(typeof calculadora.subtracao, 'function');
    });
    
    it('A soma 1 + 2 deve ser igual a 2', function(){
        assert.equal(calculadora.soma(1, 2), 2);
    });

    it('A soma 1 + (-1) deve ser igual a 0', function(){
        assert.equal(calculadora.soma(1, -1), 0);
    });

    it('A subtracao 10 - 4 deve ser igual a 6', function(){
        assert.equal(calculadora.subtracao(10, 4), 6);
    });

    it('A multiplicacao 2 * 5 deve ser igual a 10', function(){
        assert.equal(calculadora.multiplicacao(2, 5), 10);
    });

    it('A divisao 2 / 5 deve ser igual a 0.4', function(){
        assert.equal(calculadora.divisao(2, 5), 0.4);
    });

});
