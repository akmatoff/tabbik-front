export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const API_URL = BASE_URL.concat("/api");
export const API_CONVERT_TOKEN = BASE_URL.concat("/auth/convert-token");
export const API_USERDATA = API_URL.concat("/get_userdata");
export const API_CLUBS = API_URL.concat("/clubs");
