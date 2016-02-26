var employees = [
  {
    'name': 'Elena',
    'last-name': 'Grady',
    'email': 'egrady@company.example',
    'vacation-days': 13
  },
  {
    'name': 'Dorotha',
    'last-name': 'Stilwell',
    'email': 'dstilwell@company.example',
    'vacation-days': 4
  },
  {
    'name': 'Walker',
    'last-name': 'Devillier',
    'email': 'wdevillier@company.example',
    'vacation-days': 11
  },
  {
    'name': 'Osvaldo',
    'last-name': 'Sasser',
    'email': 'osasser@company.example',
    'vacation-days': 0
  },
  {
    'name': 'Vena',
    'last-name': 'Stpeter',
    'email': 'vstpeter@company.example',
    'vacation-days': 15
  }
];

// Array.prototype.every()
function haveEmails() {
  return employees.every(function(employee) {
    return !!employee['email'];
  });
}

function haveEmailsReduced() {
  return employees.reduce(function(previous, employee) {
    return previous && !!employee['email'];
  }, true);
}

function haveEmailsVanilla() {
  var allEmailsAssigned = true;

  for (var i = 0; i < employees.length; i++) {
    allEmailsAssigned = allEmailsAssigned && !!employees[i].email;
  }

  return allEmailsAssigned;
}

// Array.prototype.some()
function haveDavids() {
  return employees.some(function(employee) {
    return employee['name'] === 'David';
  });
}

function haveDavidsReduced() {
}

function haveDavidsVanilla() {
  for (var i = 0; i < employees.length; i++) {
    if (employees.name === 'David') {
      return true;
    }
  }

  return false;
}

// Array.prototype.filter()
function lastNameWith(startLetter) {
  return employees.filter(function(employee) {
    return employee['last-name'].substr(0, startLetter.length) === startLetter;
  });
}

function lastNameWithReduced(startLetter) {
}

function lastNameWithVanilla(startLetter) {
  var result = [];

  for (var i = 0; i < employees.length; i++) {
    if (employees[i]['last-name'].substr(0, startLetter.length) === startLetter) {
      result[result.length] = employees[i];
    }
  }

  return result;
}

// Array.prototype.map()
function employeesFullNames() {
  return employees.map(function(employee) {
    return employee['name'] + ' ' + employee['last-name'];
  });
}

function employeesFullNamesReduced() {
}

function employeesFullNamesVanilla() {
  var result = [];

  for (var i = 0; i < employees.length; i++) {
    result[result.length] = employees[i].name + ' ' + employees[i]['last-name'];
  }

  return result;
}

// Array.prototype.sort()
function employeesSortedBy(criteriom, ASC) {
  employees.sort(function(empA, empB) {
    return empA[criteriom] > empB[criteriom] === !!ASC ? 1 : -1;
  });
}

function employeesSortedByReduced(criteriom, ASC) {
}

function employeesSortedByVanilla() {
}

// Array.prototype.reduce()
function totalVacationDays() {
  return employees.reduce(function(previous, employee) {
    return previous + employee['vacation-days'];
  }, 0);
}

function totalVacationDaysVanilla() {
  var vacations = 0;

  for (var i = 0; i < employees.length; i++) {
    vacations += employees[i]['vacation-days'];
  }

  return vacations;
}
