let name = document.querySelector('.name');
let basic = document.querySelector('basics');
let story = document.querySelector('story');

let req = new XMLHttpRequest();

req.open("GET", "https://api.github.com/users/sdifelippo");
req.addEventListener("load", function(){
    let obj = JSON.parse(req.response);
     name.innerHTML += `

     <h1>${obj.name}</h1>`
    //  <p> </p>
});
req.send();
