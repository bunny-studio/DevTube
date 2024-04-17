function popupMsg() {
  const popupContainer = document.getElementById("popup");
  const closeBtn = document.getElementById("close-btn");

  popupContainer.style.right = "10px";

  closeBtn.addEventListener("click", () => {
    popupContainer.style.right = "-400px";
  });
}