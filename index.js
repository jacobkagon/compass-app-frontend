let addUser = false;
const usersURL = "http://localhost:3000/users";
const postsURL = "http://localhost:3000/posts";
const likesURL = "http://localhost:3000/likes";
const commentsURL = "http://localhost:3000/comments";
let pageBackGround = () => document.getElementById(`page-content`);
let userModal = () => document.getElementById(`user-modal`);
let postModal = () => document.getElementById(`post-modal`);
let userForm = () => document.querySelector(`#user-form`);
let removeSignUp = () => document.getElementById("sign-up-btn");
let postForm = () => document.getElementById("post-form");
let savePost = () => document.getElementById("save-post");
let commentModal = () => document.getElementById("comment-modal");
let commentForm = () => document.getElementById("comment-form");

document.addEventListener("DOMContentLoaded", () => {
  let removeLikes = localStorage.removeItem("postId");
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

  const closeComments = document.getElementById("sbmt");
  closeComments.addEventListener("click", () => {
    closeCommentsForm();
  });

  const CloseCommentButton = document.getElementById("close-comment-btn");
  CloseCommentButton.addEventListener("click", () => {
    closeCommentsForm();
  });

  const anotherClosedCommentButton = document.getElementById("close-new-comment");
  anotherClosedCommentButton.addEventListener("click", () => {
    closeCommentsForm();
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
    .then((resp) => resp.json())
    .then((user) => renderUserName(user.pop()));

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
  let likes = document.createElement("div");
  likes.classList.add("btn", "btn-primary", "grid-item-info");
  likes.innerText = `${post.likes.length} Likes`;
  likes.id = `like-button-${post.id}`;
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
  img.addEventListener("click", {});

  let galleryItem = document.createElement("div");
  galleryItem.classList = "gallery-item-info";

  let ul = document.createElement("ul");

  let li = document.createElement("button");
  li.classList = "gallery-item-button";
  li.type = "button";
  li.innerText = `${post.likes.length} ♥`;

  let likeButton = document.createElement("span");
  likeButton.type = "button";
  likeButton.classList = "like-button";
  likeButton.innerText = "♥";

  let userLi = document.createElement("li");
  userLi.classList = "gallery-item-user";
  userLi.innerText = `${post.user.name}`;

  li.addEventListener("click", () => {
    addLike(post, li);
  });
  const commentButton = document.createElement("button");
  commentButton.innerText = "View Comments";
  commentButton.addEventListener("click", () => {
    addCommentForm(post);
  });

  let captionLi = document.createElement("li");
  captionLi.classList = "gallery-item-caption";

  let br = document.createElement("br");
  let anotherBr = document.createElement("br");
  let thirdBreak = document.createElement("br");
  let fourthBreak = document.createElement("br");
  let fifthBreak = document.createElement("br");
  let sixthBreak = document.createElement("br");
  let seventhBreak = document.createElement("br");
  let eigthBreak = document.createElement("br");
  let ninthBreak = document.createElement("br");
  let tenthBreak = document.createElement("br");

  let postDate = document.createElement("p");

  let theDate = new Date(post.created_at);
  let dateString = theDate.toDateString();
  postDate.innerText = dateString;

  postDate.classList = "gallery-item-date";

  captionLi.innerText = `${post.caption}`;

  if (captionLi.innerText === "null") {
    ul.append(
      userLi,
      li,
      commentButton,
      br,
      anotherBr,
      thirdBreak,
      fourthBreak,
      fifthBreak,
      sixthBreak,
      seventhBreak,
      eigthBreak,
      ninthBreak,
      tenthBreak,
      postDate
    );
  } else {
    ul.append(
      userLi,
      captionLi,
      li,
      commentButton,
      br,
      anotherBr,
      thirdBreak,
      fourthBreak,
      fifthBreak,
      sixthBreak,
      seventhBreak,
      eigthBreak,
      ninthBreak,
      tenthBreak,
      postDate
    );
  }

  galleryItem.appendChild(ul);

  wrapper.insertBefore(gridItem, wrapper.firstChild);

  gridItem.append(img, galleryItem);
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

const closeCommentsForm = () => {
  commentModal().style.display = "none";
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
        localStorage.setItem("user_id", newUser.id);
        localStorage.setItem("name", newUser.name);
        renderUserName(newUser);
      });

    userForm().reset();
    closeUserForm();
  }
}

function renderUserName(user) {
  let jumbotron = document.querySelector(".jumbotron");
  div = document.createElement("div");
  div.classList = "baskin";
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
        renderPost(newImg);
      });

    postForm().reset();
    closePostForm();
  }
}

function addLike(post, li) {
  let likeNumber = +li.innerText.split(" ")[0] + 1;
  let newLike = {
    user_id: localStorage.getItem("user_id"),
    post_id: post.id,
    number: likeNumber,
  };
  fetch(`${likesURL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newLike),
  })
    .then((resp) => resp.json())
    .then((newInfo) => {
      localStorage.setItem("Likes", newInfo.number);
      localStorage.setItem("postId", newInfo.post_id);
      li.innerText = `${localStorage.getItem("Likes")} ♥`;
    });
}

function addCommentForm(post) {
  let commentModal = document.getElementById("comment-modal");
  commentModal.style.display = "block";
  let ul = document.getElementById("comments-list");
  fetch(commentsURL)
    .then((resp) => resp.json())
    .then((comArray) =>
      comArray.forEach((comment) => {
        let li = document.createElement("li");
        li.innerText = comment.body;
        if (comment.post_id === post.id) {
          ul.appendChild(li);
          closeCommentsForm();
        }
      })
    );
}
