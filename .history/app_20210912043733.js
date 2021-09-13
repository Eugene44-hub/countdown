const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
//Actual values
const proposed = new Date('2021-12-25');
const current = new Date();

const proArr = [proposed.getHours(), proposed.getMinutes(), proposed.getSeconds(), proposed.getDay(), proposed.getMonth()];
// console.log('proposed days:' + (((proArr.at(-1) * 31) - 7) + proposed.getDate()));
// console.log('current days:' + (((current.getMonth() * 31) - 5) + current.getDate()));

console.log((((proArr.at(-1) * 31) - 7) + proposed.getDate()) - (((current.getMonth() * 31) - 5) + current.getDate()) + 'days to christmas');
console.log('hours:' + (24 - current.getHours()));
console.log('minutes:' + (60 - current.getMinutes()));
console.log('seconds:' + (60 - current.getSeconds()));
let daysTo, hoursTo, minutesTo, secondsTo;

daysTo = (((proArr.at(-1) * 31) - 7) + proposed.getDate()) - (((current.getMonth() * 31) - 5) + current.getDate());
hoursTo = (24 - current.getHours());
minutesTo = ;
secondsTo = ;











//test
// let cal = proposed. - current;
// console.log(proposed);
// console.log(current.getDate());
// console.log(proArr.at(-1) + 1);
// let another = new Date(cal);
// console.log(another)
//359-253 propsed day - current day(mth*31-7) for september minus 6