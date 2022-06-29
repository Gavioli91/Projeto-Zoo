const data = require('../data/zoo_data');

function getAnimalsOlderThan(bicho, age) {
    const nameBicho = data.species.find((name) => name.name === bicho);
    return nameBicho.residents.every((ageBicho) => ageBicho.age >= age);
}

module.exports = getAnimalsOlderThan;
