// Contact Page Data Transferring to Google Sheets
function getFormattedDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const day = ("0" + now.getDate()).slice(-2);
  const hours = ("0" + now.getHours()).slice(-2);
  const minutes = ("0" + now.getMinutes()).slice(-2);
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const timestamp = document.getElementById("timestamp");
const forms = document.getElementById("contact-Form");

timestamp.value = getFormattedDateTime();
setInterval(() => {
  timestamp.value = getFormattedDateTime();
}, 1000);

window.onload = () => {
  forms.reset();
};

function popupMsg() {
  const popupContainer = document.getElementById("popup");
  const closeBtn = document.getElementById("close-btn");

  popupContainer.style.right = "10px";

  closeBtn.addEventListener("click", () => {
    popupContainer.style.right = "-400px";
  });
}
