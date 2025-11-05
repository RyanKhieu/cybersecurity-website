var i = 0;
var textIndex = 0;
var texts = [
  'Cybersecurity is Digital Safety',
  'Cybersecurity is Secure Authentication',
  'Cybersecurity is Data Protection',
  'Cybersecurity is Social Engineering Defense',
  'Cybersecurity is Essential'
];
var speed = 50; /* The speed/duration of the effect in milliseconds */
var deleteSpeed = 30; /* Speed of deleting text */
var pauseTime = 2000; /* Pause before deleting text */

function typeWriter() {
  var txt = texts[textIndex];
  
  if (i < txt.length) {
    document.getElementById("header").innerHTML = txt.substring(0, i + 1) + '<span class="cursor">|</span>';
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Pause, then start deleting
    setTimeout(deleteText, pauseTime);
  }
}

function deleteText() {
  var txt = texts[textIndex];
  
  if (i > 0) {
    document.getElementById("header").innerHTML = txt.substring(0, i - 1) + '<span class="cursor">|</span>';
    i--;
    setTimeout(deleteText, deleteSpeed);
  } else {
    // Move to next text
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

// Popup functions
function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close popup when clicking outside the content
window.onclick = function(event) {
  if (event.target.classList.contains('popup')) {
    event.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}