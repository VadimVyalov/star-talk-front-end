const REGEXP = {
  phone: {
    reg: /^\+\d{12}$/,
    mes: "Введіть коректний номер",
  },

  name: {
    reg: /^[\p{Lu}]{1}[\p{Ll}'`\d]{1,15}$/u,
    mes: "Field 'name' must contain minimum 2 characters, maximum 16, only unicode letter and first leter uppercase",
  },
  email: {
    reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.(?!ru))+[a-zA-Z]{2,3}))$/,
    mes: "Введіть коректний email",
  },
};

export default REGEXP;
