const data = require('../data/zoo_data');

const { species, hours } = data;

function availabilityAnimals(animal) {
  return species.find((callback) => callback.name === animal).availability;
}
function zooAnimal(day) {
  const seeAnimals = [];
  species.forEach((animal) => {
    if (animal.availability.includes(day)) {
      seeAnimals.push(animal.name);
    }
  });
  return seeAnimals;
}

function agend(day) {
  if (typeof day === 'string') {
    if (day === 'Monday') {
      return {
        Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
      };
    }
    const time = hours[day];
    const animalAgenda = zooAnimal(day);
    return {
      [day]: {
        officeHour: `Open from ${time.open}am until ${time.close}pm`,
        exhibition: animalAgenda,
      },
    };
  }
}

function diaDaSemana() {
  let semana = {};
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  days.forEach((dia) => {
    const visitas = agend(dia);
    const day = Object.keys(visitas);
    semana = { ...semana, [day]: visitas[dia] };
  });
  return semana;
}

function getSchedule(scheduleTarget) {
  switch (true) {
  case species.some((animal) => animal.name === scheduleTarget):
    return availabilityAnimals(scheduleTarget);
  case Object.keys(hours).includes(scheduleTarget):
    return agend(scheduleTarget);
  default:
    return diaDaSemana();
  }
}

module.exports = getSchedule;
