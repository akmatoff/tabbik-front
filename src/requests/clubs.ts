import {
  API_APPROVE_CLUB_JOIN_REQUESTS,
  API_CLUB_JOIN_REQUESTS,
  API_CLUB_MEMBERS,
  API_CLUBS,
  API_CLUBS_JOIN,
  API_CLUBS_REQUEST_TO_JOIN,
} from "@/constants/apiConstants";
import { IClub, IClubJoinRequest, IClubMembers } from "@/interfaces/club";
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

export async function getClubJoinRequests(
  id: number
): Promise<IClubJoinRequest[]> {
  return axios.get(API_CLUB_JOIN_REQUESTS(id)).then(({ data }) => data);
}

export async function approveClubJoinRequest(id: number) {
  return axios
    .post(API_APPROVE_CLUB_JOIN_REQUESTS(id))
    .then(({ data }) => data);
}

export async function getClubMembers(id: number): Promise<IClubMembers> {
  return axios.get(API_CLUB_MEMBERS(id)).then(({ data }) => data);
}
