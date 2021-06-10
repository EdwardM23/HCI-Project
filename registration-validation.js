var errorMsg = document.getElementById("errorMsg");

function validateAll() {
  if (!checkName()) {
    return;
  }
  if (!checkEmail()) {
    return;
  }
  if (!checkGender()) {
    return;
  }
  if (!checkAddress()) {
    return;
  }
  if (!checkCity()) {
    return;
  }
  if (!checkTerms()) {
    return;
  }
  errorMsg.innerHTML = "Registration Success!";
  errorMsg.style.color = "green";
}

function checkName() {
  var name = document.getElementById("name").value;
  if (name == "") {
    errorMsg.innerHTML = "Name cannot be empty.";
    return false;
  }
  return true;
}

function checkEmail() {
  var email = document.getElementById("email").value;
  if (email == "") {
    errorMsg.innerHTML = "Email cannot be empty.";
    return false;
  }
  return true;
}

function checkGender() {
  var female = document.getElementById("female").checked;
  var male = document.getElementById("male").checked;

  if (!female && !male) {
    errorMsg.innerHTML = "Gender must be chosen.";
    return false;
  }
  return true;
}

function checkAddress() {
  var address = document.getElementById("address").value;
  if (address == "") {
    errorMsg.innerHTML = "Address cannot be empty.";
    return false;
  }
  return true;
}

function checkCity() {
  var city = document.getElementById("city").value;
  if (city == "") {
    errorMsg.innerHTML = "City cannot be empty.";
    return false;
  }
  return true;
}

function checkTerms() {
  var terms = document.getElementById("terms").checked;
  if (!terms) {
    errorMsg.innerHTML = "Please agree to Terms & Conditions.";
    return false;
  }
  return true;
}
