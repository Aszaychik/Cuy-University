function switchBulb(bulb) {
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");
  let bulb1 = document.getElementById("bulb1");
  let bulb2 = document.getElementById("bulb2");
  let bulb3 = document.getElementById("bulb3");

  if (toggle1.checked == true) {
    bulb1.src = "src/on.gif";
  } else {
    bulb1.src = "src/off.gif";
  }
  if (toggle2.checked == true) {
    bulb2.src = "src/on.gif";
  } else {
    bulb2.src = "src/off.gif";
  }
  if (toggle3.checked == true) {
    bulb3.src = "src/on.gif";
  } else {
    bulb3.src = "src/off.gif";
  }
}
