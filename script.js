document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("wedding-app");
  const openButton = document.getElementById("open-invitation");
  const closeButton = document.getElementById("close-invitation");

  function openInvitation() {
    app.classList.add("is-open");
    openButton.setAttribute("aria-expanded", "true");
    closeButton.focus();
  }

  function closeInvitation() {
    app.classList.remove("is-open");
    openButton.setAttribute("aria-expanded", "false");
    openButton.focus();
  }

  openButton.addEventListener("click", openInvitation);
  closeButton.addEventListener("click", closeInvitation);

  if (typeof lucide !== "undefined" && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }
});
