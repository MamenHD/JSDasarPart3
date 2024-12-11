// Menyimpan dan mengakses nilai di set

const set = new Set();
set.add(1);
set.add(2);
 
for (const number of set) {
  console.log(number); // Output: 1, 2
}

// Bisa juga di akses dengan foreach

const sets = new Set();
sets.add(3);
sets.add(4);
 
sets.forEach((value) => console.log(value)); // Output: 1, 2
