/* Based on code from https://www.w3schools.com/howto/howto_css_modals.asp */

// not sure of law surrounding non-tracking cookies so we can't use this
// localStorage.setItem('IsModalShown', false);


// Get the modal
var newsmodal = document.getElementById("newsletterModal");
var thanksModal = document.getElementById("thanksModal");

// Get the <span> element that closes the modal
var registrationClose = document.getElementsByClassName("close")[0];

$(document).ready(function(){
   setTimeout(function(){
       newsmodal.style.display = "block";
   }, 15000); // how long in milliseconds to wait before displaying the modal. e.g. 1000 = 1 second
});

// allow 'X' to close the modal
registrationClose.onclick = function() {
	newsmodal.style.display = "none";
}


// Allow clicking outside the modals to dismiss them
window.onclick = function(event) {
	if (event.target == newsmodal) {
		newsmodal.style.display = "none";
	}
	
	if (event.target == thanksModal) {
		thanksModal.style.display = "none";
	}
}


// see email-validation.js
function emailConfirmed() {
	newsmodal.style.display 	= "none";
	thanksModal.style.display 	= "block";
}


function closeThanksModal(){
	thanksModal.style.display = "none";
}