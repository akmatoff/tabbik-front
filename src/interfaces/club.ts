import { IUser } from "./user";

export interface IClub {
  id: number;
  title: string;
  description: string;
  icon: string;
  rating: number;
  members_count: number;
  is_approved: boolean;
  is_join_request_approved: boolean;
  is_join_requested: boolean;
  club_leader: IUser;
  created: string;
  updated: string;
}

export interface IClubJoinRequest {
  id: number;
  club: IClub;
  user: IUser;
  is_approved: boolean;
}

export interface IClubMember extends IUser {
  club_id: number;
}

export interface IClubMembers {
  count: number;
  data: IClubMember[];
}
