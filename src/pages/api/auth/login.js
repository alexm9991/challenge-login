// Utils
import { withSanitize } from "@/lib/middlewares";
import { LoginSchema } from "@/lib/schemas/login-schema";

// Services
import { Service } from "@/services/login";

const isEnabledHttps = process.env.NODE_ENV === "production";

const login = async (req, res) => {
  try {
    const user = JSON.parse(req.body);
    const { success, token } = await Service.fetch({ user });

    if (!success) {
      return res.status(409).json({ message: "Invalid user data" });
    }

    res.setHeader("Set-Cookie", [
      `token=${token}; HttpOnly; Secure=${isEnabledHttps}; SameSite=Strict; Max-Age=3600; Path=/`,
      "Access-Control-Allow-Credentials=true",
    ]);

    const cookies = res.getHeader("Set-Cookie");
    console.log("Set-Cookie Header:", cookies);

    return res.send(200)
    // // Redirect
    // res.writeHead(302, { Location: "/" });
    // res.end();
  } catch (error) {
    console.log("login", error);

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default function (req, res) {
  return withSanitize(login, LoginSchema)(req, res);
}
