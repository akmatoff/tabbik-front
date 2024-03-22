import { IUser } from "./user";

export interface IClub {
  id: number;
  title: string;
  description: string;
  icon: string;
  rating: number;
  is_approved: boolean;
  club_leader: IUser;
  created: string;
  updated: string;
}
