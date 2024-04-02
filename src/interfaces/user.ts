import { IClub } from "./club";

export interface IUser {
  id: number;
  username: string;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  club: IClub;
}

export interface IUserData {
  user: IUser;
  club: IClub;
}
