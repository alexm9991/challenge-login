import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Correo inválido")
    .required("El correo electrónico es obligatorio"),
    password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[A-Z]/, "Debe contener al menos una letra mayúscula")
    .matches(/[a-z]/, "Debe contener al menos una letra minúscula")
    .matches(/\d/, "Debe contener al menos un número")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Debe contener al menos un carácter especial")
    .required("La contraseña es obligatoria"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("La confirmacion de la contraseña es obligatoria"),
});

const defaultValues = {
  email: "user@lucasian.com",
  password: "Al$12345",
  confirmPassword:  "Al$12345",
};

export { schema as UserCreateSchema, defaultValues };
