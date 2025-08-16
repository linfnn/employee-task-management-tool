import * as yup from "yup";

export const userSchema = yup.object({
    phone: yup
        .string()
        .required("This fields must be filled")
        .matches(/^0\d{9}$/, "Invalid Phone Number"),
    username: yup
        .string()
        .required("This fields must be filled"),
    password: yup
        .string()
        .required("This fields must be filled"),
    accessCode: yup
        .string()
        .required("This fields must be filled"),
});
