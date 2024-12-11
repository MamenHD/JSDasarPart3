const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
    // Membuat objek employee baru
    const newEmployee = {
      name: name,
      email: email,
      joinYear: joinYear,
    };
  
    // Menambahkan objek baru ke array employees
    employees.push(newEmployee);
  }
  
  // Penggunaan fungsinya
  addEmployee('MamenHD', 'mamenhd@dicoding.com', 2024);
  addEmployee('MamenXP', 'mamenxp@dicoding.com', 2023);
  
  console.log(employees);
  
