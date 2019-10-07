
function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('Login with');
    });       
     $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}

if (window.location.href.indexOf('login.html') > -1) {
    var input = document.getElementById("password");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("login").click();
              }
            });

  }

function shakeModal(){
    $('#loginModal .modal-dialog').addClass('shake');
             $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
             $('input[type="password"]').val('');
             setTimeout( function(){ 
                $('#loginModal .modal-dialog').removeClass('shake'); 
    }, 1000 ); 
}


function loginSuccess() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email === '' || password === '') //alert("Login credentials cannot be Empty!")
      $('#loginErrModal').modal('show')

      else if (email === '10seconds' && password === 'test@123') {
     // sessionStorage.setItem("authState", "authenticated");
     $('#loginModalSuccess').modal('show')
     //alert("hello")
    } else {
    //   //alert("Incorrect username or password! ")
     $('#detailModal').modal('show');
    }
  }

//   function validateEmail(emailField){
//     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//     if (reg.test(emailField.value) == false) 
//     {
//         $('#emailModal').modal('show');
//         return false;
//     }

//     return true;

// }
