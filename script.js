const btn = document.querySelector("button");
const inputField = document.querySelector("input");

btn.addEventListener("click", () => {
  if (inputField.getAttribute("type") == "password") {
    inputField.setAttribute("type", "text");
  } else if (inputField.getAttribute("type") == "text") {
    inputField.setAttribute("type", "password");
  }
});
