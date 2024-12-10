// Menghapus properti di Object

const user = { // user sebagai folder dari objek name dan seisinya
    name: 'MamenHD', // name sebagai objek di dalam user
    'tinggal': 'Indonesia', // Bisa juga menggunakan tanda petik untuk objek
    age: 18,
  };

delete user.age; // untuk menghapus sebuah objek

console.log(user); // memanggil user
