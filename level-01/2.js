/**
 * Kalian diminta untuk menggabungkan semua karakter yang ada dalam parameter str dan menghilangkan tanda koma (,)
 */

/**
 * Fungsi ini menggabungkan semua karakter dalam parameter str
 * dan menghilangkan tanda koma (,).
 *
 * Algoritma yang digunakan adalah dengan memanfaatkan metode split dan join.
 * 1. Fungsi split(',') akan memecah string berdasarkan tanda koma (',') dan menghasilkan array.
 * 2. Kemudian fungsi join('') digunakan untuk menggabungkan kembali elemen-elemen array
 *    menjadi satu string tanpa adanya koma.
 *
 * Waktu kompleksitas algoritma ini adalah O(n), di mana n adalah panjang string input.
 * Ini karena metode split dan join masing-masing memerlukan waktu O(n) untuk memproses string.
 */
function split(str) {
  return str.split(",").join("");
}

// others
function split(str) {
  let result = "";

  // Menggunakan perulangan `for` untuk menelusuri setiap karakter dalam string `str`.
  for (let i = 0; i < str.length; i++) {
    // Jika karakter saat ini bukan koma (`,`), karakter tersebut ditambahkan ke variabel `result`.
    if (str[i] !== ",") {
      result += str[i];
    }
  }

  return result;
}

console.log(split("a,b,c,d,e,f,g,h,i,j")); // 'abcdefghij'
console.log(split("1,2,3,4,5")); // '12345'
