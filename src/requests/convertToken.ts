import { API_CONVERT_TOKEN } from "@/constants/apiConstants";
import axios from "axios";

export function convertToken(token: string) {
  return axios
    .post(API_CONVERT_TOKEN, {
      grant_type: "convert_token",
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
      backend: "google-oauth2",
      token,
    })
    .then(({ data }) => data);
}
