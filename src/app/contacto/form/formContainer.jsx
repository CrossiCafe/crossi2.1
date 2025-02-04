"use client"
import FormContact from "./form";
import { contactSchema } from "../rule/index.js";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
export const FormContainer = () => {
    const method = useForm({
        resolver: yupResolver(contactSchema),
        defaultValues: {},
      });
    return (
        <FormProvider {...method}>
            <FormContact/>
        </FormProvider>
    )
};