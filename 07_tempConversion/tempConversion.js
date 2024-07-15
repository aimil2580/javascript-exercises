const convertToCelsius = function(temp) {
  const CTemp = (temp-32)*(5/9);
  return Math.round(CTemp * 10)/10;
};

const convertToFahrenheit = function(temp) {
  const FTemp = (temp*1.8)+32;
  return Math.round(FTemp * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
