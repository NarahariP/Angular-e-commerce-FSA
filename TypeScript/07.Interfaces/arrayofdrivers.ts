import { CricketCoach } from "./cricketcoach";
import { GolfCoach } from "./golfcoach";

let crickCoach = new CricketCoach();
let golfCoach = new GolfCoach();

let arrayOfCoachs = [];
arrayOfCoachs.push(crickCoach);
arrayOfCoachs.push(golfCoach);

for (let coach of arrayOfCoachs) {
  console.log(coach.getDailyWorkOut());
}
