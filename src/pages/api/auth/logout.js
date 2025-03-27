const logout = (_, res) => {
  try {
    res.setHeader("Set-Cookie", [
      "token=; HttpOnly; Secure=true; SameSite=Strict; Max-Age=0; Path=/",
      "Access-Control-Allow-Credentials=true",
    ]);

    return res.status(200).json({ message: "Logout exitoso" });
  } catch (error) {
    console.log("logout", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default function (req, res) {
  return logout(req, res);
}
