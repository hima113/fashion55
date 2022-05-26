let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};


document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};

function checkspaces(pass) {
  var i;
  for (i = 0; i < 8; i++) {
    if (pass[i] == " ") {
      return 0;
    }
  }
  return 1;
}

function checkvalid(valid) {
  if (valid == false) {
    valid = false;
  } else {
    valid = true;
  }
  return valid;
}

function validation() {
  var valid = true;
  var formLabeles = document.getElementsByTagName("label");
  var firstName = document.myForm.firstName.value;
  if (firstName == "") {
    formLabeles[0].innerHTML = "first name: * [Required]";
    formLabeles[0].style.color = "red";
    valid = false;
  } else if (!isNaN(firstName)) {
    formLabeles[0].innerHTML = "first name: * [Text only]";
    formLabeles[0].style.color = "red";
    valid = false;
  } else {
    formLabeles[0].innerHTML = "first name: * ";
    formLabeles[0].style.color = "black";
    valid = true;
  }
  var lastName = document.myForm.lastName.value;
  if (lastName == "") {
    formLabeles[1].innerHTML = "last name: * [Required]";
    formLabeles[1].style.color = "red";
    valid = false;
  } else if (!isNaN(lastName)) {
    formLabeles[1].innerHTML = "last name: * [Text only]";
    formLabeles[1].style.color = "red";
    valid = false;
  } else {
    formLabeles[1].innerHTML = "last name: * ";
    formLabeles[1].style.color = "black";

    checkvalid(valid);
  }
  var pass = document.myForm.pass.value;
  var i;
  var regExp = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  if (pass == "") {
    formLabeles[5].innerHTML = "password: * [Required]";
    formLabeles[5].style.color = "red";
    valid = false;
  } else if (pass.length > 8 || pass.length < 8) {
    formLabeles[5].innerHTML = "password: * [must be 8 digit]";
    formLabeles[5].style.color = "red";
    valid = false;
  } else if (pass.search(/[A-Z]/) != 0) {
    formLabeles[5].innerHTML = "password: * [must be start [A-Z] character]";
    formLabeles[5].style.color = "red";
    valid = false;
  } else if (pass.search(/[1-9]/) == -1) {
    formLabeles[5].innerHTML =
      "password: * [must include one number [1-9] at least]";
    formLabeles[5].style.color = "red";
    valid = false;
  } else if (checkspaces(pass) == 0) {
    formLabeles[5].innerHTML = "password: * [spaces not allowed]";
    formLabeles[5].style.color = "red";
    valid = false;
  } else if (!regExp.test(pass)) {
    formLabeles[5].innerHTML = "password: * [must include special character]";
    formLabeles[5].style.color = "red";
    valid = false;
  } else {
    formLabeles[5].innerHTML = "password: * ";
    formLabeles[5].style.color = "black";

    checkvalid(valid);
  }
  var eMail = document.myForm.eMail.value;
  var at = eMail.indexOf("@");
  var dot = eMail.indexOf(".");
  if (eMail == "") {
    formLabeles[4].innerHTML = "E-mail: * [Required]";
    formLabeles[4].style.color = "red";
    valid = false;
  } else if (at == -1 || dot == -1 || at > dot) {
    formLabeles[4].innerHTML = "E-mail: * [In correct E-mail]";
    formLabeles[4].style.color = "red";
    valid = false;
  } else {
    formLabeles[4].innerHTML = "E-mail name: * ";
    formLabeles[4].style.color = "black";

    checkvalid(valid);
  }
  var tNumber = document.myForm.tNumber.value;
  if (tNumber == "") {
    formLabeles[3].innerHTML = "Telephone Number: * [Required]";
    formLabeles[3].style.color = "red";
    valid = false;
  } else if (tNumber.length > 11 || tNumber.length < 11) {
    formLabeles[3].innerHTML = "Telephone Number: * [Not valid]";
    formLabeles[3].style.color = "red";
    valid = false;
  } else if (isNaN(tNumber)) {
    formLabeles[3].innerHTML = "Telephone Number: * [Not valid]";
    formLabeles[3].style.color = "red";
    valid = false;
  } else {
    formLabeles[3].innerHTML = "Telephone Number: * ";
    formLabeles[3].style.color = "black";
    checkvalid(valid);
  }
  var address = document.myForm.address.value;
  if (tNumber == "") {
    formLabeles[2].innerHTML = "Address: * [Required]";
    formLabeles[2].style.color = "red";
    valid = false;
  } else {
    formLabeles[2].innerHTML = "Address: * ";
    formLabeles[2].style.color = "black";
    checkvalid(valid);
  }
  return valid;
}


