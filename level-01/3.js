/**
 * Kalian diminta untuk mencari berapa banyak angka ganjil
 */

function findOdd(str) {
  // Variabel untuk menghitung jumlah angka ganjil
  let oddCount = 0;

  // Iterasi setiap karakter dalam string
  for (let i = 0; i < str.length; i++) {
    // Mengambil karakter ke-i dalam string
    const char = str[i];

    // Pastikan karakter adalah angka, dan cek apakah angka ganjil
    if (char >= "0" && char <= "9" && parseInt(char) % 2 !== 0) {
      oddCount++;
    }
  }

  // Mengecek jika ada angka ganjil, jika ada tampilkan jumlahnya
  if (oddCount > 0) {
    return `There are ${oddCount} odd numbers`;
  } else {
    return "There are no odd numbers";
  }
}

// others
function findOdd(str) {
  let oddCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Memeriksa apakah karakter bukan spasi dan merupakan angka
    if (char !== " " && !isNaN(char)) {
      let num = Number(char); // Jika iya, konversi karakter menjadi angka

      // Memeriksa apakah angka tersebut ganjil
      if (num % 2 !== 0) {
        oddCount++;
      }
    }
  }

  if (oddCount > 0) {
    return `There are ${oddCount} odd numbers`;
  } else {
    return `There are no odd numbers`;
  }
}

console.log(findOdd("23456")); // 'There are 2 odd numbers'
console.log(findOdd("123ABC")); // 'There are 2 odd numbers'
console.log(findOdd("1115555")); // 'There are 7 odd numbers'
console.log(findOdd("2468")); // 'There are no odd numbers'
console.log(findOdd("    ")); // 'There are no odd numbers'
