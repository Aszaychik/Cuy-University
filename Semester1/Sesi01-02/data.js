const myName = "aszaychik";
const myId = 111001;

let userBio = document.getElementById(`userBio`);
console.log(userBio);

function iniData(username, userId) {
  if (username === myName && userId === myId) {
    console.log(`Welcome Admin`);
  } else {
    console.log(`Welcome ${username}`);
  }

  console.log(`Name : ${username}`);
  console.log(`Id : ${userId}`);

  let bioData = `Name : ${username}<br>Id : ${userId}`;

  return (userBio.innerHTML = bioData);
}

iniData(`aszaychik`, 111001);
