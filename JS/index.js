let closeModal = document.getElementById("modal_x");
let openModal = document.getElementById("open_modal");
let modalContainer = document.querySelectorAll(".modal_container")[0];
let myCompany = document.getElementById("my_company");
let myOrganization = document.getElementById("my_organization");

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
myCompany.addEventListener("click", choseCompany);
myOrganization.addEventListener("click", choseOrganization);
