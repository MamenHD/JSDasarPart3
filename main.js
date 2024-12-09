// Mengakses menggunakan square bracket, ini disebut square bracket ${user['tinggal']}

const user = { // user sebagai folder dari objek name dan seisinya
    name: 'MamenHD', // name sebagai objek di dalam user
    'tinggal': 'Indonesia', // Bisa juga menggunakan tanda petik untuk objek
    age: 18,
  };

console.log(`Nama Saya adalah ${user.name} saya tinggal di ${user['tinggal']} dan umur saya adalah ${user.age}`);
