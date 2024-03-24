import { IUser } from "./user";

export interface IClub {
  id: number;
  title: string;
  description: string;
  icon: string;
  rating: number;
  members_count: number;
  is_approved: boolean;
  is_join_requested: boolean;
  club_leader: IUser;
  created: string;
  updated: string;
}
