/**
 * Belajar object
 * Di sini kalian diminta untuk mengelompokkan properti dari jenis mahluk hidup yang ada pada parameter arr.
 * Jadikan dia sebagai object. Mahluk hidup yang ada dapat berubah-ubah.
 */

function addProperty(arr) {
  const obj = {};

  // Setiap elemen array berisi pasangan [anggotaTubuh, makhlukHidup]
  for (let [anggotaTubuh, makhlukHidup] of arr) {
    // Jika makhlukHidup belum ada di dalam objek obj, buat properti baru dengan nilai array kosong
    if (!obj[makhlukHidup]) {
      obj[makhlukHidup] = [];
    }
    // Menambahkan anggotaTubuh ke dalam array yang sesuai dengan makhlukHidup
    obj[makhlukHidup].push(anggotaTubuh);
  }

  return obj;
}

// others
function addProperty(arr) {
  // Objek untuk menyimpan hasil pengelompokkan
  let result = {};

  // Iterasi untuk setiap pasangan properti dan mahluk hidup dalam array
  for (let i = 0; i < arr.length; i++) {
    let [property, creature] = arr[i]; // Menyimpan properti dan mahluk hidup

    // Jika mahluk hidup sudah ada sebagai key, tambahkan properti ke array
    if (result[creature]) {
      result[creature].push(property);
    } else {
      // Jika mahluk hidup belum ada, buat array baru dan tambahkan properti pertama
      result[creature] = [property];
    }
  }

  // Mengembalikan objek hasil pengelompokkan
  return result;
}

let arr1 = [
  ["tangan", "manusia"],
  ["belalai", "gajah"],
  ["gading", "gajah"],
  ["kaki", "manusia"],
  ["taring", "macan"],
  ["paruh", "burung"],
  ["cakar", "macan"],
  ["sayap", "burung"],
];

console.log(addProperty(arr1));
// {
//     manusia: ['tangan', 'kaki'],
//     gajah: ['belalai', 'gading'],
//     macan: ['taring', 'cakar'],
//     burung: ['paruh', "sayap"]
// }
