const getOpeningHours = require('../src/getOpeningHours');
const { hours } = require ('../data/zoo_data');

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
  });
  it('Para os argumentos Wednesday e 09:60-AM deve lançar uma exceção com a mensagem: The minutes must be between 0 and 59', () => {
    expect(() => getOpeningHours('Wednesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('O argumento deve retornar o objeto', () => {
    expect(getOpeningHours()).toBe(hours);
  });
});

describe('Testes da função getOpeningHours', () => { });
