const usersURL = "http://localhost:3000/users";
const postsURL = "http://localhost:3000/posts";
const likesURL = "http://localhost:3000/likes";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content has loaded");
  fetch(postsURL)
    .then((resp) => resp.json())
    .then((postsArray) =>
      postsArray.forEach((post) => {
        // console.log(post)
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
  img.id = `${post.id}`

  img.src = post.image;
  wrapper.appendChild(img);
  renderLikes(post)

}

function renderLikes(post) {
  post.likes.forEach (like => {
     
      
      let newWrapper = document.getElementById(post.id)
      let displayLikes = document.createElement('p')
      displayLikes.classList = 'visually-hidden'
      displayLikes.innerText = `${post.likes.length} likes`

    newWrapper.appendChild(displayLikes)})}
    
    
    // if (like.post_id === post.id){ 
      
    //   let newWrapper = document.querySelector('.item')
    //   let displayLikes = document.createElement('p')
    // displayLikes.innerText = `${like.number} likes`

    // newWrapper.appendChild(displayLikes)}
  
  
  

  
  

