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
