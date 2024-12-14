/**
 * Kalian diminta untuk menyortir (mengurutkan) tiap karakter yang ada pada str
 */

/**
 * Fungsi untuk menyortir karakter-karakter dalam sebuah string.
 * 1. Mengonversi string menjadi array karakter.
 * 2. Menyortir array karakter menggunakan 'sort()'.
 * 3. Menggabungkan kembali array yang telah disortir menjadi string.
 */
function sortirString(str) {
  // Langkah 1: Pisahkan string menjadi array karakter
  const arr = str.split("");

  // Langkah 2: Urutkan array berdasarkan urutan leksikografis
  arr.sort();

  // Langkah 3: Gabungkan kembali array menjadi string dan kembalikan hasilnya
  return arr.join("");
}

// others
function sortirString(str) {
  // Langkah 1: Pisahkan string menjadi array karakter
  const arr = str.split("");

  // Langkah 2: Urutkan array menggunakan algoritma bubble sort
  let n = arr.length;
  let swapped; // Untuk melacak apakah ada pertukaran dalam iterasi

  for (let i = 0; i < n - 1; i++) {
    swapped = false; // Reset flag swapped untuk setiap iterasi luar

    for (let j = 0; j < n - i - 1; j++) {
      // Elemen terakhir sudah terurut, kurangi iterasi
      if (arr[j] > arr[j + 1]) {
        // Tukar elemen jika urutannya salah
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // Jika tidak ada pertukaran, array sudah terurut
    if (!swapped) break;
  }

  // Langkah 3: Gabungkan kembali array menjadi string dan kembalikan hasilnya
  return arr.join("");
}

console.log(sortirString("aksjbfiwe")); // abefijksw
console.log(sortirString("127346918")); // 112346789
