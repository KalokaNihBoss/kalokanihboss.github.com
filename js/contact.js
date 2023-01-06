const scriptURL = "https://script.google.com/macros/s/AKfycbzr6-Usu7jQIbK8ffuSrnWrnvU5mgRFF5PIvquy0nXvXosJeWBl2J8095GBX8VDGd37Rw/exec";
const form = document.forms["submit-to-google-sheet"];
const buttonLoading = document.querySelector("#submitContactLoading");
const button = document.querySelector("#submitContact");
const alert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Hilangkan tombol submit tampilkan tombol loading
    buttonLoading.classList.toggle("d-none");
    button.classList.toggle("d-none");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            // Hilangkan tombol loading tampilkan tombol submit
            buttonLoading.classList.toggle("d-none");
            button.classList.toggle("d-none");
            // Tampilkan alert
            alert.classList.toggle("d-none");
            // Reset Form
            form.reset();
            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
});
