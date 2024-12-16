/**
 * Pisahkan kombinasi angka tersebut sehingga membentu kombinasi baru yang jumlahnya sesuai dengan sz (size)
 * Misalkan diberikan str = '1234'
 * Maka pisahkan menjadi 12 dan 34
 * Lalu pindahkan angka terdepan dari tiap kombinasi angka tersebut ke paling belakang dari kombinasinya
 * Misalkan 12 dan 34 ==> 21 dan 43
 * Kemudian gabungkan kembali
 */

function revrot(str, sz) {
  // Validasi input: Jika ukuran (sz) kurang dari 1, string kosong, atau sz lebih besar dari panjang string, langsung kembalikan string kosong
  if (sz <= 0 || str === "" || sz > str.length) return "";

  let result = "";

  // Loop untuk memotong string menjadi bagian-bagian dengan ukuran 'sz'
  // Setiap iterasi mengambil substring sepanjang 'sz' dari string utama
  for (let i = 0; i + sz <= str.length; i += sz) {
    // Ambil potongan string (chunk) dengan panjang 'sz'
    let chunk = str.slice(i, i + sz);

    // Rotasi chunk: Pindahkan karakter pertama ke posisi terakhir
    let rotated = chunk.slice(1) + chunk[0];

    // Tambahkan chunk yang sudah dirotasi ke string hasil akhir
    result += rotated;
  }

  // Kembalikan string hasil akhir setelah semua chunk diproses
  return result;
}

console.log(revrot("12345678", 4)); // "23416785"
console.log(revrot("2365487914", 5)); // "3654279148"
