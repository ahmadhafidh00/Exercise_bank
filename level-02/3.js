/**
 * Kalian diminta untuk membentuk array multidimensi dari parameter str. Limit adalah batas elemen pada inner array.
 * Sebagai contoh:
 * let limit = 3
 * str = abcdefg
 * output:
 * [
 *     [a,b,c],
 *     [d,e,f],
 *     [g]
 * ]
 */

function stackMe(str, limit) {
  let row = Math.ceil(str.length / limit);
  let col = limit;

  const result = [];

  // Loop untuk mengiterasi setiap baris
  for (let i = 0; i < row; i++) {
    // Membuat array kosong untuk menyimpan karakter dalam satu baris
    const innerArray = [];

    // Loop untuk mengiterasi setiap kolom dalam satu baris
    for (let j = 0; j < col; j++) {
      const offset = i * col + j;

      if (str[offset]) {
        innerArray.push(str[offset]); // Jika ada karakter pada posisi offset, masukkan ke dalam array baris
      }
    }

    // Menambahkan array baris ke dalam array hasil
    result.push(innerArray);
  }

  return result;
}

// others
function stackMe(str, limit) {
  let result = [];

  // Array sementara untuk menampung elemen-elemen yang akan dikelompokkan
  let temp = [];

  // Iterasi setiap karakter dalam string
  for (let i = 0; i < str.length; i++) {
    // Masukkan karakter ke dalam array sementara
    temp.push(str[i]);

    // Jika jumlah elemen dalam temp sudah mencapai limit, masukkan temp ke dalam result
    if (temp.length === limit) {
      result.push(temp);
      temp = []; // Reset array sementara untuk kelompok berikutnya
    }
  }

  // Jika masih ada elemen yang tersisa di temp (kurang dari limit), masukkan ke dalam result
  if (temp.length > 0) {
    result.push(temp);
  }

  // Mengembalikan hasil akhir dalam bentuk array multidimensi
  return result;
}

console.log(stackMe("abcdef", 3));
// [
//     [a,b,c],
//     [d,e,f]
// ]
console.log(stackMe("abcde", 2));
// [
//     [a,b],
//     [c,d],
//     [e]
// ]
console.log(stackMe("abcdefg", 3));
// [
//     [a,b,c],
//     [d,e,f],
//     [g]
// ]
