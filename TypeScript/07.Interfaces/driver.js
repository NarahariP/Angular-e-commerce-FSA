"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cricketcoach_1 = require("./cricketcoach");
var golfcoach_1 = require("./golfcoach");
var crickCoach = new cricketcoach_1.CricketCoach();
var golfCoach = new golfcoach_1.GolfCoach();
console.log(crickCoach.getDailyWorkOut());
console.log(golfCoach.getDailyWorkOut());
