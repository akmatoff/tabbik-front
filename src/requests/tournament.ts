import { API_TOURNAMENTS } from "@/constants/apiConstants";
import { ITournament } from "@/interfaces/tournament";
import axios from "axios";

export async function getTournaments(): Promise<ITournament[]> {
  return axios.get(API_TOURNAMENTS).then(({ data }) => data);
}

export async function getTournamentDetails(id: number): Promise<ITournament> {
  return axios.get(`${API_TOURNAMENTS}/${id}`).then(({ data }) => data);
}
