import { readUsers, writeUsers } from "@/data/local_db_user";
import { hashSync } from "bcryptjs";

export const Service = {
  create: async ({ user }) => {
    try {
      const users = readUsers();
      const userExists = users.some((u) => u.email === user.email);

      if (userExists) return { success: false };

      const newUser = {
        email: user.email,
        password: hashSync(user.password, 10),
      };

      writeUsers([...users, newUser]);

      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  },
};
