// Array dalam Rest Operator

function banyakbahasa(...bahasa) {
    console.log('Ini bahasa dalam pemrograman', bahasa);
}
   
banyakbahasa('JavaScript', 'PHP', 'Golang'); // Output yang akan keluar Ini bahasa dalam pemrograman (3) ['JavaScript', 'PHP', 'Golang']

// Cara lain menggunakan array di Rest Operator

const favorites = ['JavaScript', 'PHP', 'Golang', 'Rust', 'C#'];

const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest); 

/* Output yang akan keluar 
JavaScript
PHP
main19.js:16
(3) ['Golang', 'Rust', 'C#'] */
