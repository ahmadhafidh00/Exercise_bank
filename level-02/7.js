/**
 * Kamu diminta untuk membantu toko musik memberikan musik-musik yang sesuai dengan genre yang diberikan oleh user.
 * Perhatikan tiap test case untuk mendapatkan semuan semua hasil yang diinginkan
 */

// Fungsi untuk mencari musik berdasarkan genre yang diberikan
function musicStore(genres) {
  let dbMusic = [
    ["metal", "dream theater", "deadsquad", "avantasia"],
    ["jazz", "t-square", "snarky puppy", "cassiopea"],
    ["rock", "guns and roses", "rolling stones", "van halen"],
    ["pop", "peterpants", "armedi", "es teh dua gelas"],
  ];

  // Memisahkan string genre yang dipisahkan koma menjadi array
  genres = genres.split(",");

  const result = [];

  // Melakukan iterasi untuk setiap genre yang diminta user
  for (let i = 0; i < genres.length; i++) {
    const userGenre = genres[i];

    // Melakukan iterasi untuk mencocokkan user genre dengan genre yang ada di database
    for (let j = 0; j < dbMusic.length; j++) {
      const musicData = dbMusic[j];
      const musicGenre = dbMusic[j][0]; // Genre musik di dbMusic (misalnya "metal", "jazz", dll)

      // Jika genre yang diminta oleh user sama dengan genre yang ada di database
      if (userGenre === musicGenre) {
        result.push(musicData);
        break;
      }
    }
  }

  return result;
}

// Fungsi untuk mendapatkan musik berdasarkan input user
function getMusic(user) {
  // Validasi input, jika user tidak ada atau input tidak valid
  if (!user) {
    return "invalid input";
  }

  const musicFound = musicStore(user.genres);

  // Jika tidak ada musik yang ditemukan berdasarkan genre, mengembalikan pesan yang sesuai
  if (musicFound.length === 0) {
    return "no this kind of music available in this holy place";
  }

  return musicFound;
}

let person = {
  name: "Andrean",
  genres: "metal,rock",
};
console.log(getMusic(person));
// [
//     ["metal", "dream theater", "deadsquad", "avantasia"],
//     ["rock", "guns and roses", "rolling stones", "van halen"]
// ]

console.log(
  getMusic({
    name: "unknown",
    genres: "dangdut",
  })
); // no this kind of music available in this holy place

console.log(getMusic()); // invalid input
