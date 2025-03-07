import { readUsers } from "@/data/local_db_user";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export const Service = {
  fetch: async ({ user }) => {
    try {
      const users = readUsers();
      const { password, email } = user;
      
      const userFounded = users.find((u) => u.email === email);
      if (!userFounded) return { success: false };

      const isMatch = await compare(password, userFounded.password);
      if (!isMatch) return { success: false };

      const token = sign({ email, password }, process.env.SECRET_JWT, {
        expiresIn: "1h",
        algorithm: "HS256",
      });

      return { success: true, token };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  },
};
