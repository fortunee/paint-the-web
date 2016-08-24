(function(){
  // Initialize Firebase

  var config = {
    apiKey: "API_KEY_GOES_HERE",
    authDomain: "painttheweb-d1f76.firebaseapp.com",
    databaseURL: "https://painttheweb-d1f76.firebaseio.com"
  };
  firebase.initializeApp(config);

  // Get all form elements & buttons
  var signupEmail     = document.getElementById('signupEmail');
  var signupPassword  = document.getElementById('signupPassword');
  var btnSignup       = document.getElementById('btnSignup');
  var loginEmail      = document.getElementById('loginEmail');
  var loginPassword   = document.getElementById('loginPassword');
  var btnLogin        = document.getElementById('btnLogin');
  var btnLogout       = document.getElementById('btnLogout');

  // Add a login Event to get the form data
  btnLogin.addEventListener("click", function(e){
    var email = loginEmail.value;
    var pass = loginPassword.value;
    var auth = firebase.auth();

    // Login user
    var promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(function(e) {
      // Handle Errors here.
      var errorCode = e.code;
      var errorMessage = e.message;
      console.log(errorCode, errorMessage);
    })
  });

  // Add a Signup event
  btnSignup.addEventListener("click", function(e){

    //TODO: BE SURE EMAIL IS VALID
    var email = signupEmail.value;
    var pass  = signupPassword.value;
    var auth  = firebase.auth();

    // Sign up user
    var promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(function(e) {
      // Handle Errors here.
      var errorCode = e.code;
      var errorMessage = e.message;
      console.log(errorCode, errorMessage);
    })
  });


}());
