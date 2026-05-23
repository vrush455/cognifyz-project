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

let form = document.getElementById("myForm");
let feedback = document.getElementById("form-feedback");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "") {
    feedback.style.color = "red";
    feedback.textContent = "❌ Please enter your name!";
    return;
  }

  if (email === "") {
    feedback.style.color = "red";
    feedback.textContent = "❌ Please enter your email!";
    return;
  }

  if (!email.includes("@")) {
    feedback.style.color = "red";
    feedback.textContent = "❌ Please enter a valid email!";
    return;
  }

  if (message === "") {
    feedback.style.color = "red";
    feedback.textContent = "❌ Please enter a message!";
    return;
  }

  feedback.style.color = "green";
  feedback.textContent = "✅ Message sent successfully!";
  form.reset();
});