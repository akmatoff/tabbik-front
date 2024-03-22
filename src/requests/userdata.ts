import axios from "axios";

import { API_USERDATA } from "@/constants/apiConstants";
import { IUserData } from "@/interfaces/user";

export async function getUserdata(): Promise<IUserData> {
  return axios.get(API_USERDATA).then(({ data }) => data);
}
