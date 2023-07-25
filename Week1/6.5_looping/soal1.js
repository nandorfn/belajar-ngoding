// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
let a = 1;
let b = 5;

console.log("No. 1")
console.log("WHILE : LOOPING PERTAMA");
while (a <= 5) {
    console.log(a);
    a++;
}
console.log("WGILE : LOOPING KEDUA");
while(b >= 1) {
    console.log(b);
    b--;
}


// 1. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log("\nNo. 2")
console.log("\nFOR : LOOPING PERTAMA")
for (a = 1;a <= 5; a++ ){
    console.log(a);
}
console.log("\nFOR : LOOPING KEDUA")
for (b = 5;b >= 1; b-- ){
    console.log(b);
}

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
console.log("\nNo. 3");
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(`${i} : Genap`);
    } else {
        console.log(`${i} : Ganjil`);
    }
}

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
console.log("\n4. Counter 2===========")
for (let i =1; i <= 100; i+=2) {
    if(i % 3 === 0) {
        console.log(`${i} kelipatan 3`);
    }
}
console.log("\n4. Counter 5===========")
for (let i =1; i <= 100; i+=5) {
    if(i % 6 === 0) {
        console.log(`${i} kelipatan 6`);
    }
}
console.log("\n4. Counter 9===========")
for (let i =1; i <= 100; i+=9) {
    if(i % 10 === 0) {
        console.log(`${i} kelipatan 10`);
    }
}