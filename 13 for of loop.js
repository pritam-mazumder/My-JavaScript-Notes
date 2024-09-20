const agents = {
  sova: "initiator",
  jett: "duelist",
  omen: "controller",
  sage: "sentinel",
};

for (const agent of Object.keys(agents)) {
  console.log(agents[agent]);
}

//

const numbers = [45, 4, 10, 16, 25];

let num = 0;
for (const x of numbers) {
  num += x;
}

console.log(num);
