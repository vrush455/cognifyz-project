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
        div.style.cssText = "background: white; border-radius: 10px; padding: 1.2rem; margin-bottom: 1rem; border-left: 4px solid #e94560; box-shadow: 0 2px 8px rgba(0,0,0,0.08);";
div.innerHTML = "<h3 style='color:#e94560; font-size:1rem; margin-bottom:0.5rem;'>" + post.title + "</h3>" + "<p style='color:#444; font-size:0.9rem;'>" + post.body + "</p>" + "<p style='color:#1a1a2e; font-weight:600; margin-top:0.5rem;'>👍 " + post.reactions.likes + " likes</p>";
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