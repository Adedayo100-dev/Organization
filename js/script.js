var alertBox = document.getElementById("coronaAlert");

function closeAlert() {
    alertBox.classList.add("alert__slide-out");
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

// var searchBoxContainer = getElementById("searchBoxContainer")
// function toggleSearchBox() {

// }

// Open Modal
var modal = document.getElementById("modal");

function openModal(){
    modal.classList.add("modal-open");
    if (modal.classList.contains("modal-closed")) {
        modal.classList.replace("modal-closed", "modal-open")
    }
}
// Close Modal

function closeModal() {  
    modal.classList.add("modal-closed");
    if (modal.classList.contains("modal-open")) {
        modal.classList.replace("modal-open", "modal-closed")
    }
}
