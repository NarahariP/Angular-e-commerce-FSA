import { Coach } from "./coach";

export class GolfCoach implements Coach {
  getDailyWorkOut(): string {
    return "Hit 10 golfs at the range!";
  }
}
