document.addEventListener("DOMContentLoaded", () => {

const app = document.getElementById("wedding-app");
const openButton = document.getElementById("open-invitation");
const closeButton = document.getElementById("close-invitation");

// Open the invitation
function openInvitation() {
app.classList.add("is-open");

```
openButton.setAttribute(
  "aria-expanded",
  "true"
);

closeButton.focus();
```

}

// Close the invitation
function closeInvitation() {
app.classList.remove("is-open");

```
openButton.setAttribute(
  "aria-expanded",
  "false"
);

openButton.focus();
```

}

const weddingDate = new Date("December 12, 2026 10:00:00").getTime();

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-timer").innerHTML = 
    days + " days " + hours + " hours " + minutes + " min " + seconds + " sec ";

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown-timer").innerHTML = "It's Wedding Day! 💍";
  }
}, 1000);

// Button events
openButton.addEventListener(
"click",
openInvitation
);

closeButton.addEventListener(
"click",
closeInvitation
);

// Initialize Lucide icons if available
if (
typeof lucide !== "undefined" &&
typeof lucide.createIcons === "function"
) {
lucide.createIcons();
}

});
