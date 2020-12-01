const usersURL = "http://localhost:3000/users";
const postsURL = "http://localhost:3000/posts";
const likesURL = "http://localhost:3000/likes";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content has loaded");
  fetch(postsURL)
    .then((resp) => resp.json())
    .then((postsArray) =>
      postsArray.forEach((post) => {
         renderPost(post);
      })
    );
    // renderLikes()
});

function renderUser(user) {
  let list = document.getElementsByTagName("ul")[0];
  let name = document.createElement("li");
  name.innerText = user.name;
  list.appendChild(name);
}

function renderPost(post) {
  let wrapper = document.querySelector('.container')
  
  let img = document.createElement("img");
  img.classList = 'item'

  img.src = post.image;
  wrapper.appendChild(img);

  console.count(post.likes)
}

// function renderLikes() {
//   fetch(likesURL)
//   .then(resp => resp.json())
//   .then(likes => console.log(likes))
// }

