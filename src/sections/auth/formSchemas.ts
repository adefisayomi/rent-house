import * as yup from 'yup'

export const signupFormSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
    name: yup.string().min(3).required()
})

export const loginFormSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6)
})