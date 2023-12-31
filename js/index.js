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
  var dropdownContent = document.getElementById("dropdownContent");
  
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    }
  }
};

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the search input element
  var searchInput = document.querySelector('.search-input');

  // Get all the transcript items
  var transcriptItems = document.querySelectorAll('.message-section2-content-container');

  // Add click event listener to the search image
  var searchImage = document.querySelector('.search-container .fa-search');
  searchImage.addEventListener('click', function() {
    // Get the search term from the input
    var searchTerm = searchInput.value.trim().toLowerCase();

    // Loop through all the transcript items
    for (var i = 0; i < transcriptItems.length; i++) {
      var transcriptItem = transcriptItems[i];

      // Get the transcript text
      var transcriptText = transcriptItem.innerText.toLowerCase();

      // Show or hide the transcript item based on the search term
      if (transcriptText.includes(searchTerm)) {
        transcriptItem.style.display = 'block';
      } else {
        transcriptItem.style.display = 'none';
      }
    }
  });
});

var progress= document.querySelector("#progress");
var video= document.querySelector(".video");
var ctrlIcon= document.querySelector(".play-btn");

video.onlodedmetadata= function(){
  progress.max = video.duration;
  progress.value = video.currentTime;
}

ctrlIcon.onclick=()=>{
  if(ctrlIcon.classList.contains("fa-pause")){
    video.pause();
    ctrlIcon.classList.remove("fa-pause")
    ctrlIcon.classList.add(".play-btn")

  }
  else{
    video.play();
    ctrlIcon.classList.add("fa-pause")
    ctrlIcon.classList.remove(".play-btn")

  }
}
if(video.play()){
  setInterval(()=>{
    progress.value=video.currentTime;
  },500)
}
progress.onchange=()=>{
  video.play();
  video.currentTime=progress.value;
  ctrlIcon.classList.add("fa-pause")
  ctrlIcon.classList.remove(".play-btn")
}



