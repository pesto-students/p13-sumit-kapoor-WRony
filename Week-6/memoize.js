function memoize(func) {
    const cache = {};
    return function (...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      } else {
        const result = func.apply(this, args);
        cache[key] = result;
        return result;
      }
    };
  }
  function getTemperatureForCity(arg){
      const temperatureData = {
  
  'New York': 20,
  
  'London': 18,
  
  'Paris': 22,
  
  'Tokyo': 25,
  
  'Sydney': 28,
  
  };
  return temperatureData[arg];
  }
  
  const memoizeFunc = memoize(getTemperatureForCity);
  console.log(memoizeFunc('Paris'));
  