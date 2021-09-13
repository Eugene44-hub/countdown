const proposed = new Date('2021-12-25');
const current = new Date();

const proArr = [proposed.getHours(), proposed.getMinutes(), proposed.getSeconds(), proposed.getDay(), proposed.getMonth()]
console.log((((proArr.at(-1) * 31) - 7) + proposed.getDate()))
console.log((((current.getMonth() * 31) - 5) + current.getDate()))

console.log(((((proArr.at(-1) + 1) * 31) - 7) + proposed.getDate()) - ((((current.getMonth() + 1) * 31) - 5) + current.getDate()))
console.log(12 - proArr.at(-1))
console.log(24 - current.getHours())
console.log(60 - current.getMinutes())
console.log(60 - current.getSeconds())

// let cal = proposed. - current;
console.log(proposed)
console.log(current.getDate())
console.log(proArr.at(-1))
    // let another = new Date(cal);
    // console.log(another)
    //359-253 propsed day - current day(mth*31-7) for september minus 6