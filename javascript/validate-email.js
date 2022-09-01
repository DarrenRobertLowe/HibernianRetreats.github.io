
/* Email validation */
$(document).ready(function() {
  $('.emailError').hide();
  
  $('#Send').click(function(){
    var email = $('#email').val();
	
    if(email == ''){
      $('.emailError').show();
      return false;
    }

    if(IsEmail(email)==false){
      $('.emailError').show();
      return false;
    } else {
		$('.emailError').hide();
		emailConfirmed();			// this makes the script modular
	}
	
    return false;
	});
});


function IsEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if(!regex.test(email)) {
		return false;
	}else{
		return true;
	}
}