const { clipboard } = require("electron");

const $ = document;

const passContainer = $.getElementById("passContainer");

const copiedMsg = $.getElementById("copiedMsg");

const passGenBtn = $.getElementById("passGenBtn");

const copyPassBtn = $.getElementById("copyPassBtn");

passGenBtn.addEventListener("click", () => passGenerator());

copyPassBtn.addEventListener("click", () => copyToClipboard());

const passGenerator = () => {
  let password = "";
  let passLength = 15;

  let inputChar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < passLength; i++) {
    password += inputChar.charAt(Math.floor(Math.random() * inputChar.length));
  }

  passContainer.innerHTML = `your password: ${password}`;
};

const copyToClipboard = () => {
  let password = passContainer.innerHTML.slice(15);
  if (password) {
    clipboard.writeText(password)
    copiedMsg.classList.replace("opacity-0", "opacity-100");
    setTimeout(() => {
      copiedMsg.classList.replace("opacity-100", "opacity-0");
    }, 2000);
  } else {

  }
};
