let btn = document.getElementById("colorBtn");

btn.addEventListener("click", function() {
  document.body.style.backgroundColor = "lightblue";
});


let btn = document.getElementById("colorBtn");

btn.addEventListener("click", function() {
    let colors = ["lightblue", "lightgreen", "lightpink", "lavender"];
    let randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
})