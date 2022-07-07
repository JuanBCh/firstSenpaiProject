let donate = document.getElementsByClassName("yellow_square")[0];
let getAJob = document.getElementsByClassName("blue_square")[0];
let beAVolunteer = document.getElementsByClassName("red_square")[0];
let recicle = document.getElementsByClassName("green_square")[0];

const clickToDonate = () => window.open("../HTML/donaciones.html");
const clickToGetAJob = () =>
  window.open(
    "https://www.linkedin.com/jobs/search/?f_TPR=a1654215565-&geoId=100408775&location=Montevideo%2C%20Uruguay"
  );
const clickToBeAVolunteer = () =>
  window.open("https://www.elabrojo.org.uy/voluntariado/");
const clickToRecicle = () =>
  window.open(
    "https://montevideo.gub.uy/areas-tematicas/gestion-de-residuos/reutilizacion-y-reciclaje"
  );
donate.addEventListener("click", clickToDonate);
getAJob.addEventListener("click", clickToGetAJob);
beAVolunteer.addEventListener("click", clickToBeAVolunteer);
recicle.addEventListener("click", clickToRecicle);
