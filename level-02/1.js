/**
 * Kalian diminta untuk mencari karakter yang sama pada string yang diberikan.
 * Expected output dalam bentuk string.
 */

function findSameOne(str) {
  const frequency = {}; // Membuat objek untuk menyimpan frekuensi kemunculan setiap karakter

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === " ") continue; // Melewati spasi agar tidak dihitung

    // Jika karakter belum ada dalam objek 'frequency', inisialisasi dengan nilai 0
    if (!frequency[char]) {
      frequency[char] = 0;
    }
    // Menambah jumlah kemunculan karakter tersebut
    frequency[char]++;
  }

  let result = "";
  for (let key in frequency) {
    if (frequency[key] > 1) {
      result += key; // Jika karakter muncul lebih dari sekali, tambahkan ke `result`.
    }
  }
  return result;
}

console.log(findSameOne("aabbcc")); // abc
console.log(findSameOne("javascript")); // a
console.log(findSameOne("i love you")); // o
console.log(findSameOne("there are more")); // er
