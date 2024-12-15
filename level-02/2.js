/**
 * Pada tugas ini kalian diminta untuk mencari hewan peliharaan pada array multidimensi pada parameter arr.
 * Expected output, tuliskan koordinat kalian menemukan hewan peliharaan tersebut.
 */

function findMyPet(arr, pet) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let foundAnimal = arr[i][j];

      if (foundAnimal === pet) {
        return `I can find my ${pet} on location ${i},${j}`;
      }
    }
  }
}

let input1 = [["dog", "cat", "fish"]];
console.log(findMyPet(input1, "dog")); // "I can find my dog on location 0,0"

let input2 = [
  ["dog", "cat", "fish"],
  ["butterfly", "tarantula"],
  ["cow", "pig"],
];
console.log(findMyPet(input2, "tarantula")); // I can find my tarantula on location 1,1

let input3 = [
  [" ", " ", "fish"],
  [" ", "cat", "bird"],
  ["dog", " ", "mongoose"],
  [" ", "fox", " "],
];
console.log(findMyPet(input3, "fox")); // I can find my fox on location 3,1
