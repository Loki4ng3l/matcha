const colores = ['Red', 'Green', 'Blue'];

colores[0] = 'Yellow';

console.log(colores);
console.log(colores.length);

const numbers = [1, 2, 3, 4, 5, 6];
const double = [];
const double2 = [];

for (let i = 0; i < numbers.length; i++) {
    double.push(numbers[i] * 2);
};

for (const number of numbers) {
    double2.push(number * 2);
}

console.log(double);
console.log(double2);