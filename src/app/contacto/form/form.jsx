"use client"
import ButtonComponent from "../../../components/button/button";
import { CustomTextField } from "../../../components/customTextField/CustomTextFields";
import { ErrorMessage } from "@hookform/error-message";
import { Box, FormControl, FormGroup, Input, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, useFormContext } from "react-hook-form";
import { theme } from "../../materialThemeFormContact";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { sendEmail } from "@/utils/sendEmail";
import Swal from "sweetalert2";



export default function FormContact() {
  const reasons = [ 'Trabajar con Nosotros', 'Otros']
  const areas = [ 'Cocina', 'Marketing', 'Otros']

  const [recaptchaValue, setRecaptchaValue] = React.useState('');
  const [reason, setReason] = React.useState("")
  const [area, setArea] = React.useState("")
  const [message, setMessage] = React.useState("")
  const captchaRef = React.useRef(null);

  

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    trigger,
    reset
  } = useFormContext();
  
  console.log("🚀 ~ FormContact ~ errors:", errors)

  function onChangeReason(event) {
    setReason(event.target.value);
  }
  function onChangeArea(event) {
    setArea(event.target.value);
  }
  function onChangeMessage(event) {
    setMessage(event.target.value);
  }


  const onSubmit = async (data) => {
    try {
      await trigger("recaptcha"); // Activa la validación de recaptcha
  
      const isValid = recaptchaValue !== ''; // Comprueba si el reCAPTCHA está completado
      //console.log(data)
      if (!isValid) {
        Swal.fire({
          title: "Por favor completa el reCAPTCHA.",
          icon: "warning",
          confirmButtonText: "OK",
          confirmButtonColor: "#512200",
          focusConfirm: false,
        });
        return;
      }

      const response = await sendEmail(data);
      if(response.data.id){
        captchaRef.current.reset();
        setReason("")
        setMessage("")
        setArea("")
        reset({});
        Swal.fire({
          title: "Ya se envio tu solicitud!",
          text: "Te estaremos contactando pronto",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#512200",
          focusConfirm: false,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "No se pudo enviar tu solicitud",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#512200",
        focusConfirm: false,
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormControl component="fieldset">
          <FormGroup aria-label="position" sx={{ mt: 3, display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            <Controller
              name="reason"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl fullWidth variant="filled" sx={{ mt: "10px", mx:"auto" }} className={"width70"}>
                  <InputLabel id="simple-select-label" required>Motivo</InputLabel>
                  <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={reason}
                    label="Motivo"
                    onChange={onChangeReason}
                    onBlur={(e) => {
                      field.onChange(e);
                      trigger("reason");
                    }}
                  >
                    {
                      reasons.map((item)=>(
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              )}
            />
            <Typography variant="caption" className="!text-red-400 !drop-shadow-sm">
              <ErrorMessage errors={errors} name="reason" />
            </Typography>
            <Box className="nameBox"> 
              <Box className={"midWidth"}>
                <CustomTextField
                  name="name"
                  label="Nombre"
                  type="text"
                  required
                  control={control}
                  defaultValue=""
                  aria_describedby="outlined-day-helper-text"
                />
                <Typography variant="caption" className="!text-red-400 !drop-shadow-sm">
                  <ErrorMessage errors={errors} name="name" />
                </Typography>
              </Box>
              <Box className={"midWidth"}>
                <CustomTextField
                  name="lastName"
                  label="Apellido"
                  required
                  type="text"
                  control={control}
                  defaultValue=""
                  aria_describedby="outlined-day-helper-text"
                  
                />
                <Typography variant="caption" className="!text-red-400 !drop-shadow-sm">
                  <ErrorMessage errors={errors} name="lastName" />
                </Typography>
              </Box>
            </Box>
            <CustomTextField
              name="email"
              label="Email"
              type="email"
              control={control}
              defaultValue=""
              aria_describedby="outlined-day-helper-text"
            />
            <Typography variant="caption" className="!text-red-400 !drop-shadow-sm">
              <ErrorMessage errors={errors} name="email" />
            </Typography>
            <CustomTextField
              name="phone"
              label="Teléfono"
              type="text"
              control={control}
              defaultValue=""
              aria_describedby="outlined-day-helper-text"
            />
            <Typography variant="caption" className="!text-red-400 !drop-shadow-sm">
              <ErrorMessage errors={errors} name="phone" />
            </Typography>
            <Typography variant="caption" className="!text-red-400 !drop-shadow-sm">
              <ErrorMessage errors={errors} name="require-phone-or-email" />
            </Typography>
            {
              reason === "Trabajar con Nosotros" &&
              <>
                <Controller
                  name="areaToWork"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormControl fullWidth variant="filled" sx={{ mt: "10px", mx:"auto"}} >
                      <InputLabel id="area-select-label">Areas a aplicar</InputLabel>
                      <Select
                        labelId="area-select-label"
                        id="area-select"
                        value={area}
                        label="Areas a aplicar"
                        onChange={onChangeArea}
                        onBlur={(e) => {
                          field.onChange(e);
                          trigger("areaToWork");
                        }}
                      >
                        {
                          areas.map((item)=>(
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                          ))
                        }
                      </Select>
                    </FormControl>
                  )}
                />
                <CustomTextField
                  name="file"
                  label="Adjunta Link de tu CV"
                  type="text"
                  control={control}
                  defaultValue=""
                  aria_describedby="outlined-day-helper-text"
                />
              </>
            }
            <Controller
              name="message"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl fullWidth variant="filled" sx={{ mx:"auto"}} >
                  <textarea 
                    placeholder="Dejanos tu comentario..." 
                    rows="4" 
                    maxLength={160} 
                    name="message"
                    value={message}
                    className="textareaMessage"
                    onChange={onChangeMessage}
                    onBlur={(e) => {
                      field.onChange(e);
                      trigger("message");
                    }}
                  ></textarea>
                  <small className="textHelper">* máximo 160 caracteres</small>
                  </FormControl>  
                )}
            />
            <Controller
              name="recaptcha"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_TOKEN}
                  className="recaptcha"
                  onChange={(value) => {
                    field.onChange(value);
                    setRecaptchaValue(value);
                  }}
                  onExpired={() => {
                    field.onChange(''); 
                    setRecaptchaValue('');
                  }}
                />
              )}
            />
            <Typography variant="caption" className="!text-red-400 !drop-shadow-sm">
              <ErrorMessage errors={errors} name="recaptcha" />
            </Typography>
            

            {isSubmitting ? (
            <ButtonComponent
              disabled
              className="btnEnvio !mt-8"
            >
              Enviando...
            </ButtonComponent>
          ) : (
            <ButtonComponent
              type="submit"
              className="btnEnvio !mt-8"
            >
              Enviar
            </ButtonComponent>
          )}
          </FormGroup>
        </FormControl>
      </form>
      </ThemeProvider>
  )
}