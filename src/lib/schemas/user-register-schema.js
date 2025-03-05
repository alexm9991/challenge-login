import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("La confirmacion de  la contraseña es obligatoria"),
});

const defaultValues = {
  email: "user@lucasian.com",
};

export { schema as UserCreateSchema, defaultValues };
