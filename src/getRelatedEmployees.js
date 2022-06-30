const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((gerente) => gerente.managers.includes(id))
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const manager = data.employees.filter((callback) =>
      callback.managers.some((id) => id === managerId));
    return manager.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
