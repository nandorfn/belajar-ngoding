/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  let result = [];
  
  for (let i = 0; i < arrPenumpang.length; i++) {
    let penumpang = arrPenumpang[i];
    let awal = penumpang[1];
    let indexAwal = 0;
    let tujuan = penumpang[2];
    let indexTujuan = 0;
    
    for (let j = 0; j < rute.length; j++) {
      if (rute[j] === awal) {
        indexAwal = j + 1;
      } else if (rute[j] === tujuan) {
        indexTujuan = j + 1;
      }
    }
    
    result.push({
      penumpang: arrPenumpang[i][0],
      naikDari: awal,
      tujuan: tujuan,
      bayar: (indexTujuan - indexAwal) * 2000
    });
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]