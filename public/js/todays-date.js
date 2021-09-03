/************************************Date-in-this-format(2 December 2000)********************************************/

const d = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("todaysDate").innerHTML =d.getDate()+" "+ months[d.getMonth()]+" "+d.getFullYear();

/*******************************week-day***********************/
var d2 = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d2.getDay()];
document.getElementById("week-day").innerHTML = n;
/********************************************************************/