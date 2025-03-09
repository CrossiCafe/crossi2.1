import * as yup from "yup";

// Creamos el schema
export const contactSchema = yup.object({
  reason: yup
    .string()
    .required("Este campo es obligatorio"),
  name: yup
    .string()
    .required("Este campo es obligatorio")
    .min(2, "Mínimo 2 caracteres")
    .max(15, "Máximo 15 caracteres"),
  lastName: yup
    .string()
    .required("Este campo es obligatorio")
    .min(2, "Mínimo 2 caracteres")
    .max(15, "Máximo 15 caracteres"),
  email: yup
    .string()
    .notRequired()
    .email("El correo no es válido"),
  phone: yup
    .string()
    .notRequired()
    .matches(/^$|^[0-9]{10,}$/, "El número debe incluir el código de área, pero no el prefijo."),
  file: yup
    .string()
    .notRequired(),
  areaToWork: yup
    .string()
    .notRequired(),
  message: yup
    .string()
    .notRequired(),
  recaptcha: yup
    .string()
    // .required("Por favor acepta el captcha."),
    .test('recaptcha', 'Por favor acepta el reCAPTCHA', async function(value) {
      // Si value tiene un token, consideramos el reCAPTCHA como válido
      if (value && value !== '') {
        return true;
      }
      return false;
    })
    .required('Por favor acepta el reCAPTCHA'), // Definimos que el campo es requerido
  }).test(
    "require-phone-or-email",
    "Por favor ingresa al menos un método de contacto (email o teléfono).",
    function (value) {
      const { phone, email } = value;
      if (!(phone || email)) {
        // Le indicamos que el error se asocie a "require-phone-or-email"
        return this.createError({ path: "require-phone-or-email" });
      }
      return true;
    }
  );


  