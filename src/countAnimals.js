const data = require('../data/zoo_data');

  const countAnimals = (animal) => {
  const vazio = {};
    if (!animal) {
    data.species.forEach((bicho) => {
      vazio[bicho.name] = bicho.residents.length;
      });
      return vazio;
      }
    if (!animal.sex) return data.species.find((animais) => animais.name === animal.specie).residents.length;
    return data.species.find((animais) => animais.name === animal.specie)
    .residents.filter((animais) => animais.sex === animal.sex).length;
      };
module.exports = countAnimals;
