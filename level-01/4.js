/**
 * Kalian diminta untuk memeriksa apakah tipe data pada param1 dan param2 sama atau tidak
 */

/**
 * Fungsi untuk memeriksa apakah tipe data dari kedua parameter sama.
 * Algoritma ini membandingkan hasil dari 'typeof' kedua parameter langsung.
 * Dengan cara ini, kita mengurangi langkah-langkah yang tidak perlu.
 */
function isItTrue(param1, param2) {
  // Langsung bandingkan tipe data dari param1 dan param2
  return typeof param1 === typeof param2;
}

console.log(isItTrue("ab", "cd")); // true, karena keduanya bertipe string
console.log(isItTrue(1, 32)); // true, karena keduanya bertipe number
console.log(isItTrue(true, false)); // true, karena keduanya bertipe boolean
console.log(isItTrue("0", 0)); // false, karena satu bertipe string dan satu lagi bertipe number
