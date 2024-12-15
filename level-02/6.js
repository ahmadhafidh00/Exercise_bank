/**
 * Kelompokkan paket-paket sesuai dengan kode pengirimannya.
 * Kalian akan mendapatkan 1 parameter berupa array of strings (lihat contoh di bawah).
 * ['budi-CGK', 'bella-SRG']
 * Perhatikan pada string tersebut kita mendapatkan nama penerima dan tujuannya.
 * 
 * List tujuan adalah sebagai berikut
 * 
 * | No | Kode Penerbangan | Nama Bandara    |
   |----|:----------------:|-----------------|
   | 1. |   CGK            |  Soekarno Hatta |
   | 2. |   SRG            |  Achmad Yani    |
   | 3. |   BDO            |  Husein S.      |
   | 4. |   JOG            |  Adisucipto     |
 * 

   Output yang diharapkan adalah sebagai berikut:
   {
    nama bandara: [array yang isinya nama-nama penerima]
   }
 */

function sendItAll(arr) {
  // Jika array tidak ada isinya, kembalikan pesan 'no batch detected'
  if (!arr || arr.length === 0) {
    return "no batch detected";
  }

  // Mendefinisikan peta kode bandara ke nama bandara
  const bandaraMap = {
    CGK: "Soekarno Hatta",
    SRG: "Achmad Yani",
    BDO: "Husein S.",
    JOG: "Adisucipto",
  };

  // Membuat objek hasil yang akan menyimpan nama bandara sebagai kunci
  let result = {};

  // Iterasi setiap elemen dalam array input
  arr.forEach((item) => {
    // Pisahkan nama penerima dan kode bandara dari string item
    const [name, code] = item.split("-");

    // Periksa apakah kode bandara valid
    if (bandaraMap[code]) {
      const bandara = bandaraMap[code];

      // Jika nama bandara belum ada di objek result, inisialisasi dengan array kosong
      if (!result[bandara]) {
        result[bandara] = [];
      }

      // Tambahkan nama penerima ke array nama bandara yang sesuai
      result[bandara].push(name);
    }
  });

  // Kembalikan objek yang telah dikelompokkan berdasarkan nama bandara
  return result;
}

let batch1 = ["budi-CGK", "bella-SRG", "john-CGK", "sastro-JOG"];
// {
//   "Soekarno Hatta": ["budi", "john"],
//   "Achmad Yani": ["bella"],
//   "Adisucipto": ["sastro"]
// }
console.log(sendItAll(batch1));

console.log(sendItAll()); // no batch detected
