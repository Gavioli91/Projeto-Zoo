const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('O argumento vazio retorna: undefined', () => {
    expect(handlerElephants()).toBe();
  });
  it('No argumento que não é uma string, retorna: Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(1)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Para o argumento vazio deve retornar null', () => {
    expect(handlerElephants('wrongParameter')).toBe('Null');
  });
  it('Para o argumento de uma String contida dentro do objeto elefantes deve retornar a respectiva chave', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
});
module.exports = handlerElephants;
