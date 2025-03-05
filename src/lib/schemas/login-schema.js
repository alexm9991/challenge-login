import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .required("La contraseña es obligatoria"),
});

export { schema as LoginSchema };
