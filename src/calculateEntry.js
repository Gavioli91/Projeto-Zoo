const data = require('../data/zoo_data');

const priceChildren = data.prices.child;
const priceAdult = data.prices.adult;
const priceSenior = data.prices.senior;
const entrantsToday = [];
function countEntrants(entrants) {
  const children = entrants.filter((child) => child.age < 18).length;
  const adults = entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length;
  const seniors = entrants.filter((senior) => senior.age >= 50).length;
  return { child: children, adult: adults, senior: seniors };
}
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return (child * data.prices.child) + (adult * data.prices.adult) + (senior * data.prices.senior);
}

module.exports = { calculateEntry, countEntrants };
module.exports = { calculateEntry, countEntrants };
