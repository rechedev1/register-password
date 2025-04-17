const passwordBtn = document.querySelector("#generate-password");
const passwordGenerated = document.querySelector("#password-generated");

const letrasMinusculas = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const letrasMaiusculas = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const numeros = () => {
  return (Math.floor(Math.random()) * 10).toString();
};

const criarSimbolos = () => {
  const simbolos = "!@#_";
  return simbolos[Math.floor(Math.random() * simbolos.length)];
};

const generatePassword = (
  letrasMaiusculas,
  letrasMinusculas,
  numeros,
  criarSimbolos
) => {
  let password = "";

  const passwordLenght = 10;

  const generators = [
    letrasMaiusculas,
    letrasMinusculas,
    numeros,
    criarSimbolos,
  ];

  for (i = 0; i < passwordLenght; i = i + 4) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }
  password = password.slice(0, passwordLenght);

  passwordGenerated.style.display = "block";
  passwordGenerated.innerText = password;
};

passwordBtn.addEventListener("click", () => {
  generatePassword(letrasMaiusculas, letrasMinusculas, numeros, criarSimbolos);
});
