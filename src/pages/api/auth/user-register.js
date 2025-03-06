// Utils
import { withSanitize } from "@/lib/middlewares";
import { UserCreateSchema } from "@/lib/schemas/user-register-schema";

// Services
import { Service } from "@/services/create-account";

const register = async (req, res) => {
  try {
    const user = JSON.parse(req.body);
    const { success } = await Service.create({ user });

    if (!success) {
      return res.status(409).json({ message: "Invalid register user data" });
    }
  } catch (error) {
    console.log("register", error);

    return res.status(500).json({ message: "Internal Server Error" });
  }

  return res.status(201).json({ message: "Successfully" });
};

export default function (req, res) {
  return withSanitize(register, UserCreateSchema)(req, res);
}
