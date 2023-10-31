// buttons for choosing subject

const geoBtn = document.querySelector("#geoBtn");
const mathBtn = document.querySelector("#mathBtn");
const engBtn = document.querySelector("#engBtn");

geoBtn.addEventListener("click", () => {
    geoBtn.classList.add("buttons-clicked");
    mathBtn.classList.remove("buttons-clicked");
    engBtn.classList.remove("buttons-clicked");
});

mathBtn.addEventListener("click", () => {
  geoBtn.classList.remove("buttons-clicked");
  mathBtn.classList.add("buttons-clicked");
  engBtn.classList.remove("buttons-clicked");
});

engBtn.addEventListener("click", () => {
  geoBtn.classList.remove("buttons-clicked");
  mathBtn.classList.remove("buttons-clicked");
  engBtn.classList.add("buttons-clicked");
});