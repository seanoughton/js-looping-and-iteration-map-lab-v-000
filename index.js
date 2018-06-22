// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(
    function (driver) {
      return driver.toLowerCase();
    }
  );
}

function nameToAttributes(drivers) {
  return drivers.map(
    function (driver) {
      return {firstName:driver , lastName: driver }
    }
  );
}
