let reviews = [4, 5.2, 8, 55, 9, 0];

let total = 0;

for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
  total += reviews[i];
}

let average = total / reviews.length;
console.log("Total : " + total);
console.log("average : " + average);

console.log("using forEach Loop");

reviews.forEach((elm) => {
  console.log(elm);
});
