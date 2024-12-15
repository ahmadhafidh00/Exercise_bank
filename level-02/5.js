/**
 * Kalian diminta untuk membantu sekolah dalam menilai pekerjaan siswa-siswanya.
 * Di sini kalian mendapatkan 2 parameter yang answers (jawaban siswa) dan key (kunci jawaban).
 * Length dari answers dan key selalu sama yaitu 20.
 * Untuk setiap jawaban yang benar, poin bertambah sebanyak 10
 * Untuk setiap jawaban yang salah, poin akan berkurang sebanyak 5
 * Untuk setiap jawaban yang tidak ada isinya, tidak ada pengurangan atau penambahan poin
 * Setelah kalian mendapatkan total poin, hitunglah nilai mereka dengan rumus:
 * ((total nilai yang didapat)/(total nilai yang bisa diraih))*100
 * note: hasilnya persetage
 *
 * expected output:
 * `Siswa ini mendapatkan nilai <persentase nilai>%`
 *
 */

function checkAnswers(answers, key) {
  let totalScore = 0; // Inisialisasi skor total siswa

  // Hitung nilai maksimum yang bisa diraih (jumlah soal * 10 poin per soal)
  const maxScore = answers.length * 10;

  // Iterasi melalui setiap soal
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < answers[i].length; j++) {
      // Cek jika jawaban siswa kosong, maka tidak ada perubahan skor
      if (answers[i][j] === "") continue;

      // Cek jika jawaban benar (jawaban siswa sama dengan kunci)
      if (answers[i][j] === key[i][j]) {
        totalScore += 10; // Tambahkan 10 poin untuk jawaban benar
      }
      // Jika jawaban salah (jawaban siswa tidak sama dengan kunci)
      else {
        totalScore -= 5; // Kurangi 5 poin untuk jawaban salah
      }
    }
  }

  // Hitung persentase nilai
  const percentage = (totalScore / maxScore) * 100;

  // Kembalikan hasil dalam format yang diinginkan
  return `Siswa ini mendapatkan nilai ${percentage.toFixed(2)}%`;
}

let user1 = [
  ["", "b", "", ""],
  ["", "", "c", ""],
  ["", "b", "", ""],
  ["a", "", "", ""],
  ["", "b", "", ""],
  ["", "b", "", ""],
  ["", "", "", "d"],
  ["", "", "", "d"],
  ["", "", "c", ""],
  ["", "b", "", ""],
  ["", "b", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "c", ""],
  ["a", "", "", ""],
  ["", "", "", ""],
  ["", "b", "", ""],
  ["a", "", "", ""],
  ["a", "", "", ""],
];

let key1 = [
  ["", "b", "", ""],
  ["", "", "c", ""],
  ["", "", "", "d"],
  ["a", "", "", ""],
  ["", "b", "", ""],
  ["", "", "c", ""],
  ["", "", "", "d"],
  ["", "", "c", ""],
  ["", "b", "", ""],
  ["a", "", "", ""],
  ["", "b", "", ""],
  ["a", "", "", ""],
  ["a", "", "", ""],
  ["", "", "", "d"],
  ["", "", "c", ""],
  ["", "b", "", ""],
  ["a", "", "", ""],
  ["", "b", "", ""],
  ["a", "", "", ""],
  ["", "", "c", ""],
];

console.log(checkAnswers(user1, key1)); // Siswa ini mendapatkan nilai 27.50%
