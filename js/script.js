// Contact Page Data Transferring to Google Sheets
document.addEventListener("DOMContentLoaded", () => {
  function getFormattedDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const day = ("0" + now.getDate()).slice(-2);
    const hours = ("0" + now.getHours()).slice(-2);
    const minutes = ("0" + now.getMinutes()).slice(-2);
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  const url =
    "https://script.google.com/macros/s/AKfycbxODhnt7beD9gRfLtgHHLNaPRSgcBe1oAjsTuCWj-O0xoDVi6C0OuyS6tWXjv8TvUEBGw/exec";

  const timestamp = document.getElementById("timestamp");
  const submitBtn = document.getElementById("submitBtn");
  const msg = document.getElementById("msg");
  const forms = document.getElementById("contactForm");

  timestamp.value = getFormattedDateTime();
  setInterval(() => {
    timestamp.value = getFormattedDateTime();
  }, 60000);

  forms.addEventListener("submit", (e) => {
    e.preventDefault();
    submitBtn.innerHTML = "Submitting...";
    timestamp.values = getFormattedDateTime();
    const formData = new FormData(forms);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((finalres) => {
        submitBtn.innerText = "Submit";
        msg.classList.remove("alertMsg");
        msg.classList.add("popupGreen");
        msg.innerText = finalres;
        forms.querySelectorAll("input, textarea").forEach((input) => {
          if (input.type !== "datetime-local") {
            input.value = "";
          }
        });
        setTimeout(() => {
          msg.innerText = "";
          msg.classList.remove("popupGreen");
        }, 5000);
      })
      .catch((error) => {
        console.error("Error:", error);
        submitBtn.innerText = "Submit";
        msg.classList.add("alertMsg");
        msg.innerText = "Failed to send data. Please try again.";
      });
  });ZZZ
});

function popupMsg() {
  const popupContainer = document.getElementById("popup");
  const closeBtn = document.getElementById("close-btn");

  popupContainer.style.right = "10px";

  closeBtn.addEventListener("click", () => {
    popupContainer.style.right = "-400px";
  });
}