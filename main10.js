// Menghapus Element dan Data Array

const myArray = ['Android', 'Data Science', 'Web'];
delete myArray[1];
 
console.log(myArray); // Output: ['Android', <1 empty item>, 'Web']

// Menggunakan metode spice

const myArrayaja = ['Android', 'Data Science', 'Web'];
myArrayaja.splice(1, 1);
console.log(myArrayaja); // Output: ['Android', 'Web']

// Menggunakan Shift

const myArrayshift = ['Android', 'Data Science', 'Web'];
myArrayshift.shift(); // Berguna untuk menhilangkan nilai pertama 
console.log(myArrayshift); // Output: ['Data Science', 'Web']
 

// Menggunakan Pop

const myArrayPop = ['Android', 'Data Science', 'Web'];
myArrayPop.pop(); // Berguna untuk menhilangkan nilai terakhir
console.log(myArrayPop); // Output: ["Android", "Data Science"]
