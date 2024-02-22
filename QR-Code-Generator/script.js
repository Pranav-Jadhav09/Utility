("use strict");

// Use "const" for variables that won't be reassigned
const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const generateBtn = wrapper.querySelector(".form button");
const qrImg = wrapper.querySelector(".qr-code img");
const qrLink = wrapper.querySelector(".qr-code a"); // Reference the anchor tag
let preValue = ""; // Initialize preValue for clarity

// Function for generating QR code with arrow function and template literals
const generateQR = () => {
  const qrValue = qrInput.value.trim();
  if (!qrValue || preValue === qrValue) return;

  preValue = qrValue;
  generateBtn.textContent = "Generating QR...";

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

  qrImg.addEventListener("load", () => {
    // Fetch image data and create Blob
    fetch(qrImg.src)
      .then((response) => response.blob())
      .then((blob) => {
        // Generate object URL for temporary download
        const objectURL = URL.createObjectURL(blob);

        // Set the href of the anchor tag for download
        qrLink.href = objectURL;
        qrLink.download = "qr-code.png";

        wrapper.classList.add("active");
        generateBtn.textContent = "Generate QR Code";

        // Revoke object URL after download (consider a timeout/cleanup mechanism)
        qrLink.addEventListener("click", () => URL.revokeObjectURL(objectURL));
      })
      .catch((error) => {
        // Handle potential errors gracefully (e.g., display error message)
        console.error("Error fetching image data:", error);
      });
  });
};

generateBtn.addEventListener("click", generateQR);

// Keyup event with arrow function and destructuring
qrInput.addEventListener("keyup", (event) => {
  const { value } = event.target; // Destructuring for clarity
  if (!value.trim()) {
    wrapper.classList.remove("active");
    preValue = "";
  }
});

// Yet to add dynamic name for downloads 👨🏼‍💻
