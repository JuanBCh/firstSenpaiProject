let closeModal = document.getElementById("modal_x");
let openModal = document.getElementById("open_modal");
let modalContainer = document.querySelectorAll(".modal_container")[0];
let myCompanyBtn = document.getElementById("my_company");
let myOrganizationBtn = document.getElementById("my_organization");

function populateStorage() {
  localStorage.setItem("sesionClass", openModal.classList);
  localStorage.setItem("sesionText", openModal.innerHTML);
  setStyles();
}
function setStyles() {
  if (localStorage.getItem("sesionText")) {
    openModal.classList = localStorage.getItem("sesionClass");
    openModal.innerHTML = localStorage.getItem("sesionText");
  }
}

const letsToggleModal = () => {
  modalContainer.classList.toggle("modal_close");
};
const disableButton = () => {
  openModal.classList.add("button_changed");
};
const choseCompany = () => {
  openModal.innerHTML = "Hola Empresa!";
  letsToggleModal();
  disableButton();
  setTimeout(populateStorage(), 100);
};
const choseOrganization = () => {
  openModal.innerHTML = "Hola Organización!";
  letsToggleModal();
  disableButton();
  setTimeout(populateStorage(), 100);
};

document.body.onload = setStyles;
openModal.addEventListener("click", letsToggleModal);
closeModal.addEventListener("click", letsToggleModal);
myCompanyBtn.addEventListener("click", choseCompany);
myOrganizationBtn.addEventListener("click", choseOrganization);

let nameInput = document.getElementById("name_input");
let mailInput = document.getElementById("mail_input");
let msjTextArea = document.getElementById("textarea");
let textLenght = document.getElementById("text_lenght");
let textDiv = document.getElementById("text_div");

function useRegexForName(nameInput) {
  let regex = /[^a-zA-Z]+/i;
  return regex.test(nameInput);
}
const ValidateOnlyText = () => {
  if (useRegexForName(nameInput.value) == true)
    nameInput.classList.add("wrong_name");
  else nameInput.classList.remove("wrong_name");
};
const onlyTextAlert = () => {
  if (useRegexForName(nameInput.value) == true)
    alert(`El campo de "nombre" solo se puede completar con letras.`);
};

function useRegexForMail(mailInput) {
  let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;
  return regex.test(mailInput);
}
const validateMail = () => {
  if (useRegexForMail(mailInput.value) == false && mailInput.value.length > 0) {
    mailInput.classList.add("wrong_name");
    setTimeout(mailAlert, 100);
  } else mailInput.classList.remove("wrong_name");
  if (mailInput.value.length == 0) mailInput.classList.remove("wrong_name");
};
const mailAlert = () => alert(`El e-mail debe ser válido.`);

const showMsjLenght = () => {
  if (msjTextArea.value.length > 0) textDiv.classList.remove("blank");
  else textDiv.classList.add("blank");
  textLenght.innerText = msjTextArea.value.length;
  if (msjTextArea.value.length == 255) textDiv.classList.add("full");
  else textDiv.classList.remove("full");
};

nameInput.addEventListener("keydown", () => setTimeout(ValidateOnlyText, 1));
nameInput.addEventListener("blur", () => setTimeout(onlyTextAlert, 1));
mailInput.addEventListener("blur", () => setTimeout(validateMail, 1));
msjTextArea.addEventListener("keydown", () => setTimeout(showMsjLenght, 1));
