var reviews = [4, 5.2, 8, 55, 9, 0];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Total : " + total);
console.log("average : " + average);
console.log("using forEach Loop");
reviews.forEach(function (elm) {
    console.log(elm);
});
