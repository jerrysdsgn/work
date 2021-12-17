//Menu
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });


//Sticky
window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

//Modal
document.getElementById("modl").addEventListener('click', function(){
    document.getElementById("modalContent").classList.add("visible");
});

document.getElementById("cntct").addEventListener('click', function(){
    document.getElementById("modalContent").classList.add("visible");
});

var closeModal = document.querySelector(".close-btn");
closeModal.addEventListener('click', function(){
    document.getElementById("modalContent").classList.remove("visible");
});

//Form

function redirect(){
    window.location.replace("./redirect.html");
}

function valid(){

    //Name
    if(document.getElementById("fna").value != ""){
        document.getElementById("fna").classList.remove("is-danger");
        document.getElementById("fna").classList.add("is-success");
        var name = true;
    }else{
        event.preventDefault();
        document.getElementById("fna").classList.remove("is-success");
        document.getElementById("fna").classList.add("is-danger");
    }

    //Email
    var theName = document.getElementById("fem").value;
    if(theName == ""){
        event.preventDefault();
        document.getElementById("emailVerif").innerHTML = "";
        document.getElementById("fem").style.border = "1px solid red";
    }else if(theName != ""){
        //Validación email
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var emailInput = document.getElementById("fem");
        var str = emailInput.value;
        const n = 4;
        var slice = str.substring(str.length - n);

        if(emailInput.value.match(mailformat) && slice == ".com"){

            document.getElementById("emailVerif").innerHTML = "";
            document.getElementById("fem").style.border = "1px solid #dbdbdb";
            var email = true

        }else{

            //Aviso de email valido
            document.getElementById("emailVerif").innerHTML = "Enter valid email";
            document.getElementById("fem").style.border = "1px solid red";
            event.preventDefault();

        }

    }else{
        document.getElementById("emailVerif").innerHTML = "";
        document.getElementById("fem").style.border = "1px solid #dbdbdb";
    }

    //Message
    if(document.getElementById("frmMsg").value != ""){
        document.getElementById("frmMsg").classList.remove("is-danger")
        document.getElementById("frmMsg").classList.add("is-success");
        var message = true;
    }else{
        event.preventDefault();
        document.getElementById("frmMsg").classList.remove("is-success");
        document.getElementById("frmMsg").classList.add("is-danger");
    }

    /*

    if(name == true && email == true && message == true){
        redirect();
    }

    */
}
