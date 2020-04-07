let today = new Date();

let hours = today.getHours()
let minutes = today.getsMinutes();
let seconds = today.getSeconds();

let am = "AM"

console.log(hours + ": " + minutes + ":" + seconds);


if (hours > 12) {
    hours = hours - 12
    am = 'PM'
}

if (hours < 10)
if (hours < 10) {
    hours = "0" + minutes;

}

let time =