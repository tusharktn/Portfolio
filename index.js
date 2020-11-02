var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var app = document.getElementById('app');

var typeWriter = new Typewriter(app, {
  strings: ['A HTML developer', 'A CSS developer','A JS developer'],
  autoStart: true,
  loop:true
  
});


var button = document.getElementById("local_button");

button.addEventListener("click",submit);

function submit(e){
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mob = document.getElementById("phone_no").value;
    var reason = document.getElementById("query_box").value;

    if(name.length !== 0 && email.length !== 0 && mob.length !== 0 && reason.length !== 0){
        localStorage.setItem("Name",name);
        localStorage.setItem("Email",email);
        localStorage.setItem("Mobile",mob);
        localStorage.setItem("Reason",reason);

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone_no").value = "";
        document.getElementById("query_box").value = ""; 
    }else{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone_no").value = "";
        document.getElementById("query_box").value = ""; 
        alert("Enter full details");
    }

};


// const localStorage =document.getElementById("local_button");

// function localstorage(){
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var mob = document.getElementById("phone_no").value;
//   var query = document.getElementById("query_box").value;

//   window.localStorage = function(){localStoragefun()}

// function localStoragefun(){

//   if(name.length !== 0 && email.length !== 0 && mob.length !== 0 && reason.length !== 0){
//     console.log(name);
//     console.log(email);
//       localStorage.setItem("Name", name);
//       localStorage.setItem("Email",email);
//       localStorage.setItem("Mobile",mob);
//       localstorage.setItem("Query",query);

//       document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("mobile").value = "";
//         document.getElementById("reason").value = ""; 
//   }else{
//     document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("mobile").value = "";
//         document.getElementById("reason").value = ""; 
//   }
// };