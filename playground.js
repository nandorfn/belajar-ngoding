//Sorting bubble
// Cara kerja:
// Bandingkan elemen pertama dengan elemen kedua, jika perlu, tukar posisi.
// Bandingkan elemen kedua dengan elemen ketiga, jika perlu, tukar posisi.
// Lanjutkan proses ini hingga elemen terakhir.
// Ulangi seluruh langkah di atas hingga tidak ada lagi pertukaran yang dilakukan.

// const bubbleSort = (arr) => {
//     const n = arr.length;
//     let swapped = false;

//     do{
//         swapped = false;
//         for(let i = 0; i < n - 1; i++){
//             if ( arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[ i + 1], arr[ i ]];
//                 swapped = true;
//             }
//         }

//     } while (swapped);   
//     return arr;
// }
// const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// const sortedArray = bubbleSort(unsortedArray);
// console.log(sortedArray);

// Soal: Handling Division Error

// Tuliskan sebuah fungsi yang menerima dua angka sebagai argumen dan mencetak hasil pembagian angka pertama dengan angka kedua. Namun, jika angka kedua adalah 0, tangani kesalahan tersebut dengan menggunakan try...catch dan cetak pesan kesalahan yang sesuai.

// function divideNumbers(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         try {
//             if ( b === 0) {
//                 throw new Error('Divided by zero');
//             }
            
//             return a/ b;
            
//         } catch(error) {
//             console.error("Error: " + error.message);
//         }
    
//     } else {
//         console.error("Error: both input must be numbers");
//     }
// }

// console.log(divideNumbers(10, 2));
// console.log(divideNumbers(5, 0));
// console.log(divideNumbers("hello", 2));