let btn = document.getElementById("colorBtn");

btn.addEventListener("click", function() {
  let colors = ["lightblue", "lightgreen", "lightyellow", "lightpink", "lavender"];
  let randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
});

let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", function() {
  fetch("https://dummyjson.com/posts?limit=5")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let container = document.getElementById("posts-container");
      container.innerHTML = "";
      data.posts.forEach(function(post) {
        let div = document.createElement("div");
        div.innerHTML = "<h3>" + post.title + "</h3>" + "<p>" + post.body + "</p>" + "<p>👍 " + post.reactions.likes + " likes</p>";
        container.appendChild(div);
      });
    });
});