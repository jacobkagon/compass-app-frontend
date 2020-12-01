let addUser = false;
const usersURL = "http://localhost:3000/users";
const postsURL = "http://localhost:3000/posts";
const likesURL = "http://localhost:3000/likes";

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-user-btn");
  const formContainer = document.querySelector("#baskin")
  
  fetch(postsURL)
    .then((resp) => resp.json())
    .then((postsArray) =>
      postsArray.forEach((post) => {
        // console.log(post)
        renderPost(post);
      })
    );

    addBtn.addEventListener("click", () => {
        // hide & seek with the form
        
        if (addUser = !addUser) {
          formContainer.style.display = "block";
        } else {
          formContainer.style.display = "none";
        }
      });
    })
  // renderLikes()

function renderUser(user) {
  let list = document.getElementsByTagName("ul")[0];
  let name = document.createElement("li");
  name.innerText = user.name;
  list.appendChild(name);
}

function renderPost(post) {
  let wrapper = document.querySelector(".container");

  let img = document.createElement("img");
  img.classList = "item";
  img.id = `${post.id}`;

  img.src = post.image;
  wrapper.appendChild(img);
  renderLikes(post);
}

function renderLikes(post) {
  post.likes.forEach((like) => {
    let newWrapper = document.getElementById(post.id);
    let displayLikes = document.createElement("p");
    displayLikes.classList = "visually-hidden";
    displayLikes.innerText = `${post.likes.length} likes`;

    newWrapper.appendChild(displayLikes);
  });
}


