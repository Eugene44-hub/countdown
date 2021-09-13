const proposed = new Date('2021-12-25');
const current = new Date();

// const proArr = [proposed.getHours(), proposed.getMinutes(), proposed.getSeconds(), proposed.getDay()]
// console.log(proArr[3])

let cal = proposed - current;
console.log(proposed)

let another = new Date(cal);
console.log(another)