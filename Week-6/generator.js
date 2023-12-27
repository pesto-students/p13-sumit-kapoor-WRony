function* stringToSymbolIterator(arr) {
    for (let str of arr) {
      yield Symbol(str);
    }
  }
  
  const input = ['hello', 'world', 'test'];
  const iterator = stringToSymbolIterator(input);
  
  for (let symbol of iterator) {
    console.log(symbol);
  }