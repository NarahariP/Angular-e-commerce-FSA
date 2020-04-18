import { Coach } from "./coach";

export class CricketCoach implements Coach {
  getDailyWorkOut(): string {
    return "Please practice batting!";
  }
}
