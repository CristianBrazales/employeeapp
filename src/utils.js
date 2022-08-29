export const validateCorreo = function (correo) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo);
};

export const validateCedula = function (cedula) {
  let num = Number(cedula);
  // validate uniqueness agains backend//
  return cedula.length === 10 && Number.isInteger(num) && num > 0;
};

export const validateNombresApellidos = function (str) {
  return !(containsNumber(str) || containsSpecialChars(str));
};

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

function containsNumber(str) {
  return /\d/.test(str);
}
