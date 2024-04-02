export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const API_URL = BASE_URL.concat("/api");
export const API_CONVERT_TOKEN = BASE_URL.concat("/auth/convert-token/");
export const API_USERDATA = API_URL.concat("/get_userdata/");
export const API_CLUBS = API_URL.concat("/clubs/");
export const API_CLUB_JOIN_REQUESTS = (id: number) =>
  API_CLUBS.concat(`${id}/get_join_requests`);
export const API_CLUB_MEMBERS = (id: number) =>
  API_CLUBS.concat(`${id}/get_members`);
export const API_APPROVE_CLUB_JOIN_REQUESTS = (id: number) =>
  API_URL.concat(`/club-join-requests/${id}/approve_request`);
export const API_CLUBS_REQUEST_TO_JOIN = (id: number) =>
  API_CLUBS.concat(`${id}/request_to_join/`);
export const API_CLUBS_JOIN = (id: number) =>
  API_CLUBS.concat(`${id}/join_club`);
