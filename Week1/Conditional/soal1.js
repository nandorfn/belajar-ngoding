// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
const Proxytia = (nama, peran) => {
  peran  = peran.toLowerCase();
  
  if (!nama && !peran) {
    return "nama dan peran wajib diisi";
  } else if (!nama) {
    return "nama wajib diisi";
  } else if (!peran) {
    return "Pilih peranmu untuk memulai game";
  } else {
    if (peran === 'ksatria') {
      return `halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu`;
    } else if (peran === 'tabib') {
      return `halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`;
    } else if (peran === 'penyihir') {
      return `halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`;
    } else {
      return 'tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada';
    } 
  }
  

  
  
};


let nama = "", peran = "";

//code disini gunakan console.log untuk outputnya
console.log(Proxytia('Sasuke', 'Ksatria'));
console.log(Proxytia('Sakura', 'Tabib'));
console.log(Proxytia('Hinata', 'Penyihir'));
console.log(Proxytia('Naruto', 'Ninja')); 
console.log(Proxytia('', 'Ksatria'));
console.log(Proxytia('Neji', ''));
console.log(Proxytia('', ''));