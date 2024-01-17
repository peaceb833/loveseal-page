

const mobileMenuEl = document.querySelector('.mobileNavMenu');
const openEl = document.querySelector('.burger-menu');
const closeEl = document.querySelector('.close');
const backwardButton = document.querySelector('.backward');
const forwardButton = document.querySelector('.forward');

openEl.addEventListener('click', () => {
  mobileMenuEl.classList.toggle("open");
  
});
closeEl.addEventListener('click', () => {
  mobileMenuEl.classList.remove("open");
  console.log('clicked');
});

backwardButton.onclick=()=> {
  video.currentTime -= 5; // You can adjust the value (in seconds) by which the video should go backward
}
forwardButton.onclick=()=> {
  video.currentTime += 5; // You can adjust the value (in seconds) by which the video should go backward
}

document.addEventListener('DOMContentLoaded', function () {
  var volumeIcon = document.getElementById('volumeIcon');
  var volumeControl = document.getElementById('volumeControl');

  // Initial state
  volumeControl.style.display = 'none';

  // Toggle volume control on volume icon click
  volumeIcon.addEventListener('click', function () {
      if (volumeControl.style.display === 'none') {
          volumeControl.style.display = 'block';
      } else {
          volumeControl.style.display = 'none';
      }
  });

  // Update volume level when volume control is adjusted
  volumeControl.addEventListener('input', function () {
      var volumeLevel = volumeControl.value;
      // Set the volume of the video (assuming your video element has the class 'video')
      document.querySelector('.video').volume = volumeLevel / 100;
  });
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
  var searchImage = document.querySelector('.search-container .fa-search');
  searchImage.addEventListener('click', function() {
    var searchTerm = searchInput.value.trim().toLowerCase();
    for (var i = 0; i < transcriptItems.length; i++) {
      var transcriptItem = transcriptItems[i];
      var transcriptText = transcriptItem.innerText.toLowerCase();
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
volume.onclick=()=> {
  var video = document.querySelector('.video');
  var volumeInput = document.querySelector('.volume');
  
  var volumeValue = volumeInput.value / 100;
    video.volume = volumeValue;
}

// FORM FIELD
   
