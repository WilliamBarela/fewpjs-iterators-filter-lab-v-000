// Code your solution here

const findMatching = (drivers, string) => {
  return drivers.filter( driver => driver[0].toLowerCase() === string.toLowerCase());
};

const fuzzyMatch = (drivers, string) => {
  return drivers.filter( driver =>  driver.slice(0,) === string);
};

const matchName = ()