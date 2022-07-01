const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  // Para os argumentos Monday e 09:00-AM deve retornar a string 'The zoo is closed' (Já que o Zoo está sempre fechado na segunda);
  it('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  // Para os argumentos Tuesday e 09:00-AM deve retornar a string 'The zoo is open';
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  // Para os argumentos Wednesday e 09:00-PM deve retornar a string 'The zoo is closed';
  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  // Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: 'The day must be valid. Example: Monday'
  it('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: The day must be valid', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  // Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: 'The abbreviation must be \'AM\' or \'PM\'';
  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  // Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: 'The hour should represent a number';
  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: The hour should represent a number', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  // Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: 'The minutes should represent a number';
  it('', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  // Para os argumentos Monday e 17:00-AM deve lançar uma exceção com a mensagem: 'The hour must be between 0 and 12';
  it('', () => {
    expect(() => getOpeningHours('Monday', '17:00-AM')).toThrow('The hour must be between 0 and 12');
  })
     // Para o argumento vazio deve retornar 'null';
  it('Para o argumento vazio deve retornar null', () => {
    expect(handlerElephants('wrongParameter')).toBe('Null');
  });
  // Para o argumento de uma String contida dentro do objeto elefantes deve retornar a respectiva chave
  it('Para o argumento de uma String contida dentro do objeto elefantes deve retornar a respectiva chave', () => {
    expect(handlerElephants('popularity')).toEqual(5);
});
})

describe('Testes da função getOpeningHours', () => { })
