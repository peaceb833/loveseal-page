AOS.init({duration:2000});
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
