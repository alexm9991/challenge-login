import { resolve } from "path";
import { existsSync, readFileSync, writeFileSync } from "fs";

const USERS_FILE = resolve("src/data/users.json");

// Función para leer usuarios desde el archivo JSON
export const readUsers = () => {
  if (!existsSync(USERS_FILE)) {
    return [];
  }
  const data = readFileSync(USERS_FILE, "utf-8");
  return data ? JSON.parse(data) : [];
};

// Función para escribir usuarios en el archivo JSON
export const writeUsers = (users) => {
  writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
};
