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