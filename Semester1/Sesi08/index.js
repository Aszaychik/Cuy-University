let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");

function generatePassword(passwordLength) {
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const num = "0123456789";
  const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  const data = lowerAlphabet + upperAlphabet + num + symbols;
  let generator = "";
  for (let index = 0; index < passwordLength; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  console.log("generator :>> ", generator);
  return generator;
}

function getPassword() {
  if (passwordLength.value <= 0) {
    alert(`PASSWORD LENGHT CANT LESS THAN 1!`);
    password.value = "";
  } else {
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
    setTimeout(() => {
      alert(`PASSWORD HAS BEEN GENERATED!`);
    }, 200);
  }
}

const copyPassword = () => {
  password.select();
  password.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(password.value);
  setTimeout(() => {
    alert("PASSWORD HAS BEEN COPY!");
  }, 200);
};
