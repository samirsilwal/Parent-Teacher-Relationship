$(document).ready(function(){
console.log('document fully loaded');

//login form validation
$('.loginForm__footer-submitButton').click(function(){
	var inputField=$('.loginForm__body-inputField');
      if($(inputField[0]).val()==""){
      	$(inputField[0]).addClass('loginForm__body-inputField--error');
      } 
      if($(inputField[1]).val()==""){
      	$(inputField[1]).addClass('loginForm__body-inputField--error');
      }

});
$('.loginForm__body-inputField').focus(function(){
     $(this).removeClass('loginForm__body-inputField--error');
});
});