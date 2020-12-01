const usersURL = "http://localhost:3000/users";
const postsURL = "http://localhost:3000/posts";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content has loaded");
  fetch(postsURL)
    .then((resp) => resp.json())
    .then((postsArray) =>
      postsArray.forEach((post) => {
         renderPost(post);
      })
    );
});

function renderUser(user) {
  let list = document.getElementsByTagName("ul")[0];
  let name = document.createElement("li");
  name.innerText = user.name;
  list.appendChild(name);
}

function renderPost(post) {
  let galleryItem = document.querySelector(".container");
  let img = document.createElement("img");
  img.classList = "img-fluid";
  img.src = post.image;
  galleryItem.appendChild(img);
}

