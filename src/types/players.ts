import type { Team } from './teams';

export interface Player {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  position_abbreviation: string;
  height: string;
  weight: string;
  jersey_number: string;
  college: string;
  experience: string;
  age: number;
  team: Team;
}
