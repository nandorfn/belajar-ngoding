/*
Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }
*/

function shoppingTime(memberId, money) {
  // you can only write your code here!
  if (!memberId) {
    return 'Mohon maaf, toko x hanya berlaku untuk member saja';
  }

  const tokoX = {
    sepatuStacattu: {
      harga: 1500000,
      value: 'Sepatu Stacattu'
    },
    bajuZoro: {
      harga: 500000,
      value: 'Baju Zoro'
    },
    bajuHNN: {
      harga: 250000,
      value: 'Baju H&N'
    },
    sweaterUniklooh: {
      harga: 175000,
      value: 'Sweater Uniklooh'
    },
    casingHP: {
      harga: 50000,
      value: 'Casing HP'
    }
  }

  let currentMoney = money;
  const customer = {
    memberId,
    money,
    listPurchased: [],
    changeMoney: currentMoney
  };

  for (const key in tokoX) {
    if (currentMoney >= tokoX[key].harga) {
      customer.listPurchased.push(tokoX[key].value);
      customer.changeMoney -= tokoX[key].harga;
    }
  }

  if (customer.listPurchased.length === 0) {
    return 'Mohon maaf, uang tidak cukup';
  }

  return customer;
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
// TEST CASES
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja