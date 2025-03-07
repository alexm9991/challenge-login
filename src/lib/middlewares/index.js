/**
 * Middleware to sanitize and validate request data.
 *
 * @param {Request} req - The Next.js HTTP request object.
 * @param {import("yup").AnySchema} schema - The Yup schema to validate the request body.
 */
export const sanitize = async (req, res, schema) => {
  const isValid = schema.isValidSync(JSON.parse(req.body)); // Validate synchronously

  if (!isValid) {
    return res.status(400).json({ error: "Invalid data" });
  }
};

/**
 * Sanitization middleware to wrap a request handler in Next.js.
 *
 * @param {Function} handler - The request handler function.
 * @param {import("yup").AnySchema} schema - The Yup schema for validation.
 * @returns {Function} - Returns a new function that first sanitizes the request, then executes the original handler.
 */
export function withSanitize(handler, schema) {
  return async (req, res) => {
    const response = await sanitize(req, res, schema);

    if (response) return response; // Stop execution if sanitization fails

    return handler(req, res);
  };
}

export const getCookie = (req, cookieKey) => {
  const cookies = req.headers?.cookie || "";
  const cookie = cookies
    .split("; ")
    .find((row) => row.startsWith(`${cookieKey}`))
    ?.split("=")[1];

  return cookie;
};

export const authRedirect = (req) => {
  return {
    redirect: {
      destination: getCookie(req, "token") ? "/home" : "/login",
      permanent: false, // False para permitir futuros cambios en la redirección
    },
  };
};
