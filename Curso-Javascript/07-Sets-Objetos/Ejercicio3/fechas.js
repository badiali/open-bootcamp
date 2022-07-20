const fecha = new Date();
console.log(fecha);

const nacimiento = new Date(1981, 11, 11);
console.log(nacimiento);

const masTarde = fecha > nacimiento;
console.log(masTarde);

const diaNacimiento = nacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = nacimiento.getMonth() + 1;
console.log(mesNacimiento);

const anyoNacimiento = nacimiento.getFullYear();
console.log(anyoNacimiento);