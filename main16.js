// Menghapus nilai di dalam set

const set = new Set();
set.add(2);
set.add(7);
set.add(9);

set.delete(9); // Set(2) {2,7}

console.log(set);
