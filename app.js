const color = document.getElementById("color");
const p1 = document.getElementById("p");
color.addEventListener("input", (e) => {
  console.log(e.target.value);
  document.body.style.backgroundColor = e.target.value;
  p1.innerHTML = "Please take your hex color code" + "   " + e.target.value;
});
