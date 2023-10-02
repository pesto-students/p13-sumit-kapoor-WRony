let input = prompt('Enter word/words with spaces::');
let array = input.split(' ');

function getWordCount() {
  let map = {};
for (let i = 0; i < array.length; i++) {
    let item = array[i];
    map[item] = (map[item] + 1) || 1;
  }
  return map;
}
console.log(getWordCount(array));