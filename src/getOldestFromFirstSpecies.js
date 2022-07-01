const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
const idAnimal = data.employees.find((employee) => 
    employee.id === id).responsibleFor[0];
const animalsResidents = data.species.find((animal) => 
    animal.id === idAnimal).residents;
  return Object.values(animalsResidents.reduce((acc, curr) => {
    if (curr.age >= acc.age) {
      return curr;
    } return acc;
  }));
}

module.exports = getOldestFromFirstSpecies;
