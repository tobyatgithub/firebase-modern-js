import "./style.css";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent form submission refresh the whole page
  showSpinner();
  const data = new FormData(form);

  const response = await fetch("http://localhost:8080/dream", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: data.get("prompt"),
    }),
  });

  if (response.ok) {
    const { image } = await response.json();
    const result = document.querySelector("#result");
    hideSpinner();
    result.innerHTML = `<img src="${image}" width="512 />`;
  } else {
    const err = await response.text();
    alert(err);
    console.error(err);
  }
});

function showSpinner() {
  const button = document.querySelector("button");
  button.disabled = true; // when loading disable submit
  button.innerHTML = 'Dreaming... <span class="spinner">🧠</span>';
}

function hideSpinner() {
  const button = document.querySelector("button");
  button.disabled = false; // when loading disable submit
  button.innerHTML = "Dream";
}
