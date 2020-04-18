"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cricketcoach_1 = require("./cricketcoach");
var golfcoach_1 = require("./golfcoach");
var crickCoach = new cricketcoach_1.CricketCoach();
var golfCoach = new golfcoach_1.GolfCoach();
var arrayOfCoachs = [];
arrayOfCoachs.push(crickCoach);
arrayOfCoachs.push(golfCoach);
for (var _i = 0, arrayOfCoachs_1 = arrayOfCoachs; _i < arrayOfCoachs_1.length; _i++) {
    var coach = arrayOfCoachs_1[_i];
    console.log(coach.getDailyWorkOut());
}
