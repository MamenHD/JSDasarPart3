//Mengakses menggunakan object destructuring

const user = { // user sebagai folder dari objek name dan seisinya
    name: 'MamenHD', // name sebagai objek di dalam user
    'tinggal': 'Indonesia', // Bisa juga menggunakan tanda petik untuk objek
    age: 18,
  };

const {name, age} = user; // di masukan kedalam sebuah user agar pemanggilan berikutnya tidak perlu menggunakan user

console.log(`Nama saya adalah ${name} dan umur saya adalah ${age}`);
