let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    //["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
    input.splice(1, 4, 
    "Roman Alamsyah Elsharawy",
    "Provinsi Bandar Lampung",
    "21/05/1989",
    "Pria",
    "SMA Internasional Metro")
    console.log(input);
    
    //Mei
    const dateSplit = input[3].split('/');
    if ([dateSplit[1] === '05']) {
        month = 'Mei';
        console.log(month);
    }
    
    //["1989", "21", "05"]
    const reverseDate = [dateSplit[2], dateSplit[0], dateSplit[1]];
    console.log(reverseDate);
    
    //21-05-1989
    const replaceSymbol = dateSplit.join('-');
    console.log(replaceSymbol);
    
    //Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
    console.log(input[1].substring(0, 15))

}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */