  let currentMoney = money;
  if (!memberId ) {
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
  const customer = {
    memberId,
    money,
    listPurchased: [],
    changeMoney: currentMoney
  }
  
  let isAnyPurchase = false;
  for (const key in tokoX) {
    if (currentMoney >= tokoX[key].harga) {
      currentMoney -= tokoX[key].harga;
      customer.listPurchased.push(tokoX[key].value);
      isAnyPurchase = true;
      break;
    } 
  }
  if (!isAnyPurchase) {
    return 'Mohon maaf, uang tidak cukup';
  }
  customer.changeMoney = currentMoney;
  return customer;
}