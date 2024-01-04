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

export const test = yup.object().shape({
  name: yup.string().required("Введіть ім'я").min(2, "Введіть коректне ім'я").max(256, "Введіть до 256 символів"),
  phone: yup
    .string()
    .required("Введіть номер телефону")
    .matches(REGEXP.phone.reg, REGEXP.phone.mes),
  email: yup.string()
    .required("Поле обов'язкове для заповнення")
    .email("Введіть коректний email")
    .matches(REGEXP.email.reg, REGEXP.email.mes),
});

export const name =
  yup
    .string()
    .required("Введіть ім'я")
    .min(2, "Введіть коректне ім'я")
    .max(256, "Введіть до 256 символів");

export const phone =
  yup
    .string()
    .required("Введіть номер телефону")
    .matches(REGEXP.phone.reg, REGEXP.phone.mes);

export const email = yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .email("Введіть коректний email")
    .matches(REGEXP.email.reg, REGEXP.email.mes)

export const telegram = yup
    .string()
    .required("Поле обов'язкове для заповнення")
    .matches(REGEXP.telegram.reg, REGEXP.telegram.mes)

export const telegramOrPhone = yup
  .string()
  .required("Поле обов'язкове для заповнення")
  .test('telegramOrPhone', 'Введіть коректний telegram або  номер телефону ', 
    function(value) {
      let isValidTelegram = REGEXP.telegram.reg.test(value);
      let isValidPhone = REGEXP.phone.reg.test(value);
      if (!isValidTelegram && !isValidPhone ){
        return false;
      }
      return true;
    })
