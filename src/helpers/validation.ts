import * as yup from "yup";
import REGEXP from '../constants/regexp'

export const gift = yup.object().shape({
  name: yup.string().required("Введіть ім'я").min(2, "Введіть коректне ім'я").max(256, "Введіть до 256 символів"),
  phone: yup
    .string()
    .required("Введіть номер телефону")
    .matches(REGEXP.phone.reg, REGEXP.phone.mes )
});

export const feedback = yup.object().shape({
  name: yup.string()
    .required("Поле обов'язкове для заповнення")
    .max(256, "Введіть до 256 символів"),
  email: yup.string()
    .required("Поле обов'язкове для заповнення")
    .email("Введіть коректний email")
    .matches(REGEXP.email.reg, REGEXP.email.mes),
  message: yup.string()
    .required("Введіть повідомлення...")
    .max(700, "Введіть до 700 символів")
});