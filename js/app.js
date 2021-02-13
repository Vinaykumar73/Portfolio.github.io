
$(document).ready(function(){
    
    
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click',function()
    {
        mobileNav.classList.add('open');
    });
    times.addEventListener('click',function()
    {
        mobileNav.classList.remove('open');

    });
});


 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBe_4YePd5Q-iMavwKL0WtvkwoZBQz4m8o",
    authDomain: "portfolio-5b561.firebaseapp.com",
    projectId: "portfolio-5b561",
    storageBucket: "portfolio-5b561.appspot.com",
    messagingSenderId: "283204394672",
    appId: "1:283204394672:web:123a14d8079f4a8aef6575",
    measurementId: "G-CZCT3SSFNL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//Referncde msg
var messagesRef = firebase.database().ref('messages');

  //for submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
e.preventDefault();

//Get values

var name = getInputVal('name');
var email = getInputVal('email');
var subject = getInputVal('subject');
var textarea = getInputVal('textarea');

//save msg
saveMessage(name,email,subject,textarea);


}

//function to get from values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save msg to firebase

function saveMessage(name,email,subject,textarea){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        textarea: textarea
    });
}