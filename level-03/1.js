/**
 * Cek apakah str2 dapat dibuat dengan huruf-huruf yang ada di str1.
 * jika bisa tampilkan true, jika tidak tampilkan false
 */

function scramble(str1, str2) {
  // Buat objek untuk menyimpan frekuensi karakter di str1
  const charCount = {};

  // Hitung frekuensi setiap karakter di str1
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Cek setiap karakter di str2
  for (let char of str2) {
    // Jika karakter tidak ada di str1 atau frekuensinya kurang, return false
    if (!charCount[char] || charCount[char] <= 0) {
      return false;
    }
    // Kurangi frekuensi karakter di str1
    charCount[char]--;
  }

  // Jika semua karakter di str2 lolos pengecekan, return true
  return true;
}

console.log(scramble("rkqodlw", "world")); // true
console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
console.log(scramble("katas", "steak")); // false
console.log(scramble("scriptjava", "javascript")); // true
console.log(scramble("scriptingjava", "javascript")); // true
console.log(scramble("scriptsjava", "javascripts")); // true
console.log(scramble("jscripts", "javascript")); // false
console.log(scramble("aabbcamaomsccdd", "commas")); // true
