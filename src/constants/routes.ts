export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  CLUBS: "/clubs",
  CLUBS_LIST: "/clubs/list",
  CLUB_JOIN_REQUESTS: (id: number) => `/clubs/${id}/join-requests`,
  CLUB_DETAILS: (id: number) => `/clubs/${id}/details`,
  PROFILE: "/profile",
};
