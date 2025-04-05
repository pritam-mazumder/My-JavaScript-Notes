let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());
console.log(myDate.toJSON());
console.log(typeof o);

let myCreatedDate = new Date(2e3, 0, 1);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDatedak.toLocaleString());

let myCreatedDate2 = new Date("2000-01-01");
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getHours())
console.log(newDate.getMilliseconds())
console.log(newDate.getMinutes())
console.log(newDate.getMonth())
console.log(newDate.getSeconds())
console.log(newDate.getTime())

newDate.toLocaleString('default',{
  weekday: "long",
})