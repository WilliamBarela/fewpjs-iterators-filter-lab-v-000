// Code your solution here

const fuzzyMatch = (drivers, string) => {
  return drivers.filter( driver =>  driver[0] === string);
};