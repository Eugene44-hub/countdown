setInterval(e => {
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    //Actual values
    const proposed = new Date('2021-12-25');
    const current = new Date();

    const proArr = [proposed.getHours(), proposed.getMinutes(), proposed.getSeconds(), proposed.getDay(), proposed.getMonth()];
    let daysTo, hoursTo, minutesTo, secondsTo;

    daysTo = (((proArr.at(-1) * 31) - 7) + proposed.getDate()) - (((current.getMonth() * 31) - 5) + current.getDate());
    hoursTo = (24 - current.getHours());
    minutesTo = (60 - current.getMinutes());
    secondsTo = (60 - current.getSeconds());

    days.textContent = daysTo;
    hours.textContent = hoursTo;
    minutes.textContent = minutesTo;
    seconds.textContent = secondsTo;
}, Infinity)









//calculation starts
// console.log((((proArr.at(-1) * 31) - 7) + proposed.getDate()) - (((current.getMonth() * 31) - 5) + current.getDate()) + 'days to christmas');
// console.log('hours:' + (24 - current.getHours()));
// console.log('minutes:' + (60 - current.getMinutes()));
// console.log('seconds:' + (60 - current.getSeconds()));
//claculations end


// console.log('proposed days:' + (((proArr.at(-1) * 31) - 7) + proposed.getDate()));
// console.log('current days:' + (((current.getMonth() * 31) - 5) + current.getDate()));
//test
// let cal = proposed. - current;
// console.log(proposed);
// console.log(current.getDate());
// console.log(proArr.at(-1) + 1);
// let another = new Date(cal);
// console.log(another)
//359-253 propsed day - current day(mth*31-7) for september minus 6