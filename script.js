const btn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("more");
const dots = document.getElementById("dots");

btn.addEventListener("click", () => {
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    dots.style.display = "none";
    btn.textContent = "Read less";
  } else {
    moreText.style.display = "none";
    dots.style.display = "inline";
    btn.textContent = "Read more";
  }
});
