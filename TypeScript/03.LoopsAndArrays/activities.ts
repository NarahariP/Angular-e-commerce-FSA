let activities = ["Playing", "Reading", "Watching"];

console.log("********For Loop**********");
for (let i = 0; i < activities.length; i++) {
  console.log(activities[i]);
}

activities.push("Writing");

console.log("**********Simplifies for Loop*********");
for (let act of activities) {
  console.log(act);
}

console.log("**********Simplifies for Loop with condition *********");
for (let act of activities) {
  if (act == "Playing") console.log(act + " is my favorite activity!");
  else console.log(act);
}

console.log("***********ForEach************");
activities.forEach((elm) => {
  console.log(elm);
});
