const API_URL = process.env.API_URL || "http://localhost:3000/api";

const API_PATHS = {
  AUTH: {
    USER_REGISTER: `${API_URL}/auth/user-register`,
    LOGIN: `${API_URL}/auth/login`,
  },
};

export { API_URL, API_PATHS };
