import {
  API_CLUBS,
  API_CLUBS_JOIN,
  API_CLUBS_REQUEST_TO_JOIN,
} from "@/constants/apiConstants";
import { IClub } from "@/interfaces/club";
import axios from "axios";

export async function getClubs(): Promise<IClub[]> {
  return axios.get(API_CLUBS).then(({ data }) => data);
}

export async function getClubDetails(id: number): Promise<IClub> {
  return axios.get(`${API_CLUBS}${id}`).then(({ data }) => data);
}

export async function requestToJoinClub(id: number) {
  return axios.post(API_CLUBS_REQUEST_TO_JOIN(id)).then(({ data }) => data);
}

export async function joinClub(id: number) {
  return axios.post(API_CLUBS_JOIN(id)).then(({ data }) => data);
}
