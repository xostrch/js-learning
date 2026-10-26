console.log("===EXERCISE 1===");
let date = new Date(2012,1,20,3,12);
console.log(date);

console.log("===EXERCISE 2===");
function getWeekDay(date){
    const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}

let date2 = new Date(2014, 0, 3);
console.log(getWeekDay(date2));

console.log("===EXERCISE 3===");

function getLocalDay(date){
    let day = date.getDay();
    if (day == 0) { 
        day = 7;
    }
    return day;
}

let date3 = new Date(2012, 0, 3);  // 3 Jan 2012
console.log( getLocalDay(date3) );  


console.log("===EXERCISE 4===");
function getDateAgo(date,days){
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}
let date4 = new Date(2015, 0, 2);

console.log( getDateAgo(date4, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date4, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date4, 365) ); // 2, (2 Jan 2014)


console.log("===EXERCIE 5===");
//PRZECZYTAC CALE I DOKONCZYC ZADANIA