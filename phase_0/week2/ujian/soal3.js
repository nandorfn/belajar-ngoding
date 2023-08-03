/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  //Sorting
  for (let i = 0; i < animals.length - 1; i++) {
    for (let j = 0; j < animals.length - i - 1; j++) {
      const hurufA = animals[j].charAt(0).toLowerCase();
      const hurufB = animals[j + 1].charAt(0).toLowerCase();

      if (hurufA > hurufB) {
        let temp = animals[j];
        animals[j] = animals[j + 1];
        animals[j + 1] = temp;
      }
    }
  }

  // Grouping
  let hasil = {};
  for (let i = 0; i < animals.length; i++) {
    let huruf1 = animals[i][0];
    if (!hasil[huruf1]) {
      hasil[huruf1] = [];
    }
    hasil[huruf1].push(animals[i]);
  }

  let grupAnimals = [];
  for (let key in hasil) {
    grupAnimals.push(hasil[key]);
  }

  return grupAnimals;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]