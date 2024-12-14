/**
 * Kalian diminta untuk menggabungkan nama depan dan nama belakang pada function combineName
 * Lihat tiap test case untuk mengetahui hasil yang diharapkan
 */

function combineName(firstName, lastName) {
  // Periksa apakah kedua nama diberikan dan tidak kosong
  // Jika inputnya tidak valid (misalnya salah satu parameter kosong atau tidak diberikan), kembalikan pesan error "Invalid Input".
  if (!firstName || !lastName) {
    return "Invalid Input";
  }

  // Jika input valid, kembalikan hasil penggabungan dalam format `lastName, firstName`
  return `${lastName}, ${firstName}`;
}

console.log(combineName("John", "Doe")); // Doe, John
console.log(combineName("Dell", "Monroe")); // Monroe, Dell
console.log(combineName("Filbert", "Michael")); // Michael, Filbert
console.log(combineName("")); // Invalid Input
console.log(combineName()); // Invalid Input
