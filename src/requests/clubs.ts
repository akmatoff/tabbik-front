import { API_CLUBS } from "@/constants/apiConstants";
import { IClub } from "@/interfaces/club";
import axios from "axios";

export async function getClubs(): Promise<IClub[]> {
  return axios.get(API_CLUBS).then(({ data }) => data);
}

export async function getClubDetails(id: number): Promise<IClub> {
  return axios.get(`${API_CLUBS}/${id}`).then(({ data }) => data);
}
