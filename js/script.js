var alertBox = document.getElementById("coronaAlert");

function closeAlert() {
    alertBox.classList.add("alert__slide-up");
}

var navDropdownList = document.getElementsByClassName("nav-dropdown");
var navDropdownContentList = document.getElementsByClassName("nav-dropdown-content");

for (let i = 0; i < navDropdownList.length; i++) {
    // var navDropdownButton = navDropdownList[i];
    // var navDropdownContent = navDropdownContentList[i];
    navDropdownList[i].onclick = function(e){
        if (navDropdownContentList[i].classList.contains("nav-content__display")) {
            navDropdownContentList[i].classList.remove('nav-content__display');
        }
        else{
            navDropdownContentList[i].classList.toggle("nav-content__display");
            console.log(navDropdownContentList[i]);
        }
    }
}

var searchToggleClass = document.getElementById("navBar");
function toggleSearchBar(){
    console.log("red");
    searchToggleClass.classList.toggle("switch-toggle");
}

// Open Modal
var modal = document.getElementById("modalWindow");
var modalCarousel = document.getElementById("modalCarousel");
// var signInForm = document.getElementById("signInForm");
// var signUpForm = document.getElementById("signUpForm");
function openModal(method){
    if (modal.classList.contains("modal-closed")) {
        modal.classList.replace("modal-closed", "modal-open");
    }
    else{
        modal.classList.add("modal-open");      
    }
    switch (method) {
        case 'signin':
            if(modalCarousel.classList.contains("display-signup")) {
                modalCarousel.classList.replace("display-signup", "display-signin")
            }
            else{
                modalCarousel.classList.add("display-signin");
            }
            break;
        case 'signup':
            if(modalCarousel.classList.contains("display-signin")) {
                modalCarousel.classList.replace("display-signin", "display-signup")
            }
            else{
                modalCarousel.classList.add("display-signup");
            }
            break;
        case 'forgotpassword':
            if(modalCarousel.classList.contains("display-signin")) {
                modalCarousel.classList.replace("display-signin", "display-signup")
            }
            else{
                modalCarousel.classList.add("display-signup");
            }
            break;
        default:
            break;
    }
    modalCarousel.classList.add("display-"+method);
    console.log("display-"+method)
}
// Close Modal

function closeModal() {  
    if (modal.classList.contains("modal-open")) {
        modal.classList.replace("modal-open", "modal-closed");
    }
    else{
        modal.classList.add("modal-closed");
    }
}
