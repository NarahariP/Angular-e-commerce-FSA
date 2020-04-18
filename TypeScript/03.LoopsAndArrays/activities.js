var activities = ["Playing", "Reading", "Watching"];
console.log("********For Loop**********");
for (var i = 0; i < activities.length; i++) {
    console.log(activities[i]);
}
activities.push("Writing");
console.log("**********Simplifies for Loop*********");
for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
    var act = activities_1[_i];
    console.log(act);
}
console.log("**********Simplifies for Loop with condition *********");
for (var _a = 0, activities_2 = activities; _a < activities_2.length; _a++) {
    var act = activities_2[_a];
    if (act == "Playing")
        console.log(act + " is favorite activity!");
    else
        console.log(act);
}
console.log("***********ForEach************");
activities.forEach(function (elm) {
    console.log(elm);
});
