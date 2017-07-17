let header = document.querySelector(".header");
let basics = document.querySelector(".basics");
let story = document.querySelector(".story");
let picture = document.querySelector(".picture");


let req = new XMLHttpRequest();

req.open("GET", "https://api.github.com/users/Sdifelippo");
req.addEventListener("load", function() {
  let obj = JSON.parse(req.response);

  header.innerHTML += `
  <h1>${obj.name}</h1>
  `

  basics.innerHTML += `
     <h2>The Basics<h2>
     <li><span>Name: </span>${obj.name}</li>
     <li><span>GitHub URL: </span> <a href="${obj.url}">Sdifelippo<a></li>
     <li><span>Location: </span>${obj.location}</li>
     <li><span>Company: </span>${obj.company}</li>
     <li><span>Website: </span><a href="${obj.blog}">MyAwesomeWebsite.com</a></li>
     `
  story.innerHTML += `
     <h2>The Story:</h2> <a> ${obj.bio} </a>

     `
   picture.innerHTML += `
   <img src="${obj.avatar_url}">
   `
});

req.send()
