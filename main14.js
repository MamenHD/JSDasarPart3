// Menghapus Nilai Map

const map = new Map();

map.set('name', 'Mamen');
map.set('lastname', 'HD');

map.delete('lastname'); // Nilai Lastname di map di hapus

console.log(map); // Map(1) { 'name' => 'aras' }
