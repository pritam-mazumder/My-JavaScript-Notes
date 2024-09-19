// if-statement

let trafficLight = "green";

if (trafficLight === "green") {
  console.log("go");
}

// else-if

let trafficLight2 = "green";

if (trafficLight2 === "green") {
  console.log("go");
} else {
  console.log("broken");
}

// if-else-if ladder

let trafficLight3 = "green";

if (trafficLight3 === "red") {
  console.log("stop");
} else if (trafficLight3 === "yellow") {
  console.log("slow");
} else if (trafficLight3 === "green") {
  console.log("go");
} else {
  console.log("broken");
}

// nested-if statement
let i = 10;

if (i == 10) {
  if (i < 15) {
    console.log("i is smaller than 15");
    if (i < 12) {
      console.log("i is smaller than 12 too");
    } else {
      console.log("i is greater than 15");
    }
  }
}

// switch statement

let trafficLight4 = "green";

switch (trafficLight4) {
  case "green":
    console.log("go");
    break;
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("slow");
    break;
  default:
    console.log("broken");
    break;
}
