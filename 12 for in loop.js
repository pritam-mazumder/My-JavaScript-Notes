agents = {
  sova: "initiator",
  jett: "duelist",
  omen: "controller",
  sage: "sentinel",
};

for (a in agents) {
  console.log(agents[a]);
}

const numbers = [45, 4, 10, 16, 25];

let num = 0;
for (let x in numbers) {
  num += numbers[x];
}

console.log(num);
