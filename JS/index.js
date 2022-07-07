let closeModal = document.getElementById("modal_x");
let openModal = document.getElementById("open_modal");
let modalContainer = document.querySelectorAll(".modal_container")[0];
let myCompanyBtn = document.getElementById("my_company");
let myOrganizationBtn = document.getElementById("my_organization");

const letsToggleModal = () => {
  modalContainer.classList.toggle("modal_close");
};
const disableButton = () => {
  openModal.disabled = true;
  openModal.classList.add("button_changed");
};
const choseCompany = () => {
  openModal.innerHTML = "Hola Compania!";
  letsToggleModal();
  disableButton();
};
const choseOrganization = () => {
  openModal.innerHTML = "Hola Organización!";
  letsToggleModal();
  disableButton();
};

openModal.addEventListener("click", letsToggleModal);
closeModal.addEventListener("click", letsToggleModal);
myCompanyBtn.addEventListener("click", choseCompany);
myOrganizationBtn.addEventListener("click", choseOrganization);

let nameInput = document.getElementById("name_input");
let mailInput = document.getElementById("mail_input");
let msjTextArea = document.getElementById("textarea");
let formBtn = document.getElementById("form_btn");

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
  let regex = /@\./i;
  return regex.test(mailInput);
}
const validateMail = () => {
  if (useRegexForName(mailInput.value) == false) {
    mailInput.classList.add("wrong_name");
    setTimeout(mailAlert, 100);
  } else mailInput.classList.remove("wrong_name");
};
const mailAlert = () => alert(`El e-mail debe ser válido.`);

nameInput.addEventListener("keydown", () => setTimeout(ValidateOnlyText, 1));
nameInput.addEventListener("blur", () => setTimeout(onlyTextAlert, 1));
mailInput.addEventListener("blur", () => setTimeout(validateMail, 1));
