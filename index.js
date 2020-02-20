// Code your solution here

const findMatching = (drivers, string) => {
  return drivers.filter( driver => driver[0].toLowerCase)
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter( driver =>  driver[0] === string);
};