/**
 * Pada tugas ini kalian diminta untuk menghitung berapa poin yang didapatkan oleh student dan hadiah apa saja yang bisa dia dapatkan pada suatu sekolah.
 * Poin didapatkan dengan mengerjakan challenge, exam dan rocket.
 * Di sini kalian akan mendapatkan 3 function
 *
 * 1. Function schoolThingy
 *   - adalah function utama yang akan menghasilkan object student dengan properti nama, total point, recommended prizes
 * 2. Function getRewards
 *   - adalah function yang akan menghasilkan rekomendasi hadiah yang dapat diambil student DIMULAI DARI YANG PALING MAHAL
 * 3. Function getPoints
 *   - adalah function yang akan menghitung berapa poin yang dimiliki oleh student
 */

// Fungsi untuk menghitung total poin berdasarkan tugas yang diselesaikan
function getPoints(doneList) {
  let tasks = {
    challenge: 200,
    exam: 750,
    rocket: 100,
  };

  // Variabel untuk menghitung total poin
  let totalPoints = 0;

  // Iterasi melalui setiap tugas yang ada di doneList
  doneList.forEach((task) => {
    // Menentukan jenis tugas dengan memisahkan nama tugas dari ID-nya
    let taskType = task.split("-")[0];

    // Jika jenis tugas ada dalam objek tasks, tambahkan poinnya ke totalPoints
    if (tasks[taskType]) {
      totalPoints += tasks[taskType];
    }
  });

  // Mengembalikan total poin yang didapatkan
  return totalPoints;
}

// Fungsi untuk memberikan rekomendasi hadiah berdasarkan total poin
function getRewards(totalPoint) {
  let prizes = [
    [1000, "tempat pensil", "1 pak pulpen", "canvas kecil"],
    [3000, "novel angels and demons", "novel harry potter"],
    [6000, "free lunch for 1 week voucher"],
  ];

  // Array untuk menyimpan hadiah-hadiah yang dapat ditukarkan oleh siswa
  const result = [];

  // Iterasi melalui daftar hadiah, dimulai dari hadiah yang paling mahal
  for (let i = prizes.length - 1; i >= 0; i--) {
    // Destructuring array untuk mengambil poin minimum (prizePoint) dan daftar hadiah (prizeName)
    const [prizePoint, ...prizeName] = prizes[i];

    for (let j = 0; j < prizeName.length; j++) {
      // Jika total poin siswa cukup untuk mendapatkan hadiah ini
      if (totalPoint >= prizePoint) {
        // Tambahkan hadiah ke dalam array hasil
        result.push(prizeName[j]);

        // Kurangi total poin setelah menukarkan hadiah
        totalPoint -= prizePoint;
      }
    }
  }

  // Jika ada hadiah yang berhasil ditukarkan, gabungkan hasilnya menjadi satu string dan kembalikan
  if (result.length > 0) {
    return result.join(", ");
  }

  // Jika tidak ada hadiah yang sesuai (total poin tidak cukup), kembalikan null
  return null;
}

// Fungsi utama untuk menghasilkan objek siswa dengan poin dan hadiah yang direkomendasikan
function schoolThingy(student) {
  // Menghitung total poin berdasarkan tugas yang telah diselesaikan
  let totalPoints = getPoints(student.tasks);

  // Mendapatkan hadiah yang sesuai dengan total poin
  let recommendedPrize = getRewards(totalPoints);

  // Mengembalikan objek siswa dengan nama, total poin, dan hadiah yang direkomendasikan
  return {
    name: student.name,
    totalPoints: totalPoints,
    recommendedPrizes: recommendedPrize,
  };
}

console.log(
  schoolThingy({
    name: "Skyler",
    tasks: ["challenge-001", "challenge-002", "challenge-003", "exam-04"],
  })
);
// Output: {
//     name: "Skyler",
//     totalPoints: 1350,
//     recommendedPrizes: "tempat pensil"
// }

console.log(
  schoolThingy({
    name: "John",
    tasks: [
      "challenge-001",
      "challenge-002",
      "challenge-003",
      "exam-04",
      "challenge-004",
      "challenge-005",
      "challenge-006",
      "challenge-007",
      "rocket-001",
    ],
  })
);
// Output: {
//   name: 'John',
//   totalPoints: 2250,
//   recommendedPrizes: 'tempat pensil, 1 pak pulpen'
// }
