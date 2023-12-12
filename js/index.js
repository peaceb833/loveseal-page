// AOS.init({duration:2000});
const mobileMenuEl = document.querySelector('.mobileNavMenu');
const openEl = document.querySelector('.burger-menu');
const closeEl = document.querySelector('.close');
openEl.addEventListener('click', () => {
    mobileMenuEl.classList.toggle("open");
    
});
closeEl.addEventListener('click', () => {
    mobileMenuEl.classList.remove("open");
    console.log('clicked');
});


function toggleDropdown() {
  var dropdownContent = document.querySelectorAll(".dropdown-content");
  dropdownContent.forEach(n=> {
  if (n.style.display === "block") {
    n.style.display = "none";
  } else {
    n.style.display = "block";
  }
  // n.onclick=()=>{
  //   n.classList.toggle('display')
  // }
});
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    }
  }
}
