let addUser = false;
const usersURL = "http://localhost:3000/users";
const postsURL = "http://localhost:3000/posts";
const likesURL = "http://localhost:3000/likes";
let pageBackGround = () => document.getElementById(`page-content`);
let userModal = () => document.getElementById(`user-modal`);
let postModal = () => document.getElementById(`post-modal`);
let userForm = () => document.querySelector(`#user-form`);
let removeSignUp = () => document.getElementById("sign-up-btn");
let postForm = () => document.getElementById("post-form");
let savePost = () => document.getElementById("save-post");

document.addEventListener("DOMContentLoaded", () => {
  const newPostButton = document.getElementById("new-post-btn");
  newPostButton.addEventListener("click", () => {
    showNewPostForm();
  });

  const newUserButton = document.getElementById("sign-up-btn");
  newUserButton.addEventListener("click", () => {
    showNewUserForm();
  });

  const closePost = document.getElementById("close-post");
  closePost.addEventListener("click", () => {
    closePostForm();
  });

  const anotherClosedPost = document.getElementById("tiger-king");
  anotherClosedPost.addEventListener("click", () => {
    closePostForm();
  });

  const closeUser = document.getElementById("close-user-btn");
  closeUser.addEventListener("click", () => {
    closeUserForm();
  });

  const closeNewUser = document.getElementById("close-new-user");
  closeNewUser.addEventListener("click", () => {
    closeUserForm();
  });

  fetch(postsURL)
    .then((resp) => resp.json())
    .then((postsArray) =>
      postsArray.forEach((post) => {
        // console.log(post)
        renderPost(post);
      })
    );

    fetch(usersURL)
  .then(resp => resp.json())
  .then(user => renderUserName(user.pop()))

  userForm().addEventListener("submit", (event) => {
    createUser(event);
  });

  postForm().addEventListener("submit", (event) => {
    createPost(event);
  });
});
// renderLikes()

function renderUser(user) {
  let list = document.getElementsByTagName("ul")[0];
  let name = document.createElement("li");
  name.innerText = user.name;
  list.appendChild(name);
}

function renderPost(post) {
  let wrapper = document.querySelector(".container");
  // let likes = document.createElement("div");
  // likes.classList.add("btn", "btn-primary", "grid-item-info");
  // likes.innerText = `${post.likes.length} Likes`;
  let gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  // let comments = document.createElement('div')
  // comments.classList.add('btn', 'btn-primary', 'grid-item-info')
  // comments.innerText = `${post.comments.length} comments`
  let img = document.createElement("img");
  img.classList = "item";
  img.id = `${post.id}`;

  img.src = post.image;

  let galleryItem = document.createElement('div')
 galleryItem.classList = "gallery-item-info"

 let ul = document.createElement('ul')

 let li = document.createElement('li')
 li.classList = "gallery-item-caption"
 li.innerText = `${post.likes.length} likes`



  ul.append(li)

 galleryItem.appendChild(ul)

  wrapper.insertBefore(gridItem, wrapper.firstChild);
  
  gridItem.append(img, galleryItem);

 






  // renderLikes(post);
}


const showNewPostForm = () => {
  postModal().style.display = `block`;
  pageBackGround().position = `fixed`;
};

const showNewUserForm = () => {
  userModal().style.display = `block`;
  pageBackGround().position = `fixed`;
};

const closePostForm = () => {
  postModal().style.display = "none";
  pageBackGround().position = "auto";
};

const closeUserForm = () => {
  userModal().style.display = "none";
  pageBackGround().position = "auto";
};

function createUser(event) {
  event.preventDefault();
  let userInput = document.getElementById("enter-name").value;

  if (userInput === "") {
    document.getElementById("enter-name").placeholder =
      "Please Enter Your Name";
  } else {
    let data = {};
    data.name = userInput;

    fetch(usersURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((newUser) => {
        localStorage.setItem("user_id", newUser.id)
        localStorage.setItem("name", newUser.name)
        renderUserName(newUser)
      });
      

    userForm().reset();
    closeUserForm();
  }
//  window.location.reload(true)
}

function renderUserName(user) {
  let jumbotron = document.querySelector(".jumbotron");
  div = document.createElement("div");
  div.classList = "baskin";;
  div.id = `${user.id}`;
  jumbotron.appendChild(div);
}

function createPost(event) {
  event.preventDefault();

  let targetImage = document.getElementById("get-post").value;
  let captureCaption = document.getElementById("post-caption").value;
  let userId = document.querySelector(".baskin");
  if (targetImage === "") {
    document.getElementById("get-post").placeholder = "Please enter a link";
  } else {
    let newPost = {
      image: targetImage,
      user_id: localStorage.getItem("user_id"),
      caption: captureCaption,
    };

    fetch(postsURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((resp) => resp.json())
      .then((newImg) => {
        localStorage.setItem("imageId", newImg.id)
        localStorage.setItem("image", newImg.image)
        localStorage.setItem("caption", newImg.caption)
        localStorage.setItem("likes", newImg.likes)
        localStorage.setItem("comments", newImg.comments)
        renderPost(newImg);
      })

    postForm().reset();
    closePostForm();
  }
}



