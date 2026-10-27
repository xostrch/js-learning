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
function getLastDayOfMonth(year, month){
    let date = new Date(year,month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012,0));
console.log(getLastDayOfMonth(2012,1));
console.log(getLastDayOfMonth(2013,1));



console.log("===EXERCIE 6===");
function getSecondsToday(){
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today;
    return Math.round(diff / 1000);
}

console.log(getSecondsToday());


console.log("===EXERCIE 7===");
function getSecondsTomorrow(){
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}

console.log(getSecondsTomorrow());



console.log("===EXERCIE 8===");
function formatDate(date){
    let diff = new Date() - date;

    if(diff < 1000){
        return 'right now';
    }

    let sec = Math.floor(diff / 1000);

    if(sec < 60){
        return `${sec} sec. ago`;
    }

    let min = Math.floor(diff / 60000);

    if(min < 60){
        return `${min} min. ago`;
    }

     let d = [
        '0' + date.getDate(),
        '0' + (date.getMonth() + 1), 
        '' + date.getFullYear(),
        '0' + date.getHours(),
        '0' + date.getMinutes()
    ].map(part => part.slice(-2)); 

    return `${d[0]}.${d[1]}.${d[2]} ${d[3]}:${d[4]}`;

}

console.log( formatDate(new Date(new Date - 1)) ); // "right now"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );