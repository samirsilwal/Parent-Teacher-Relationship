$(document).ready(function(){
console.log("document is ready");
$('.signup__option>.btn').click(function(){
var tab_id=$(this).attr('data-tab');

if(this.className!="btn btn--active"){
console.log("true");

$('.signup__option>.btn').removeClass('btn--active');
$('.signup__form').removeClass('signup__form--open');
$(this).addClass('btn--active');
$('#'+tab_id).addClass('signup__form--open');

}
})
//front end form validation
$('.btnsubmit').click(function(){
var selectedId=$(this).parent().attr('id');
var inputField=$('#'+selectedId).find(".inputField");
var len=inputField.length;
for(var i=0;i<len-1;i++){
if($(inputField[i]).val()==""){
$(inputField[i]).addClass("input--state-error");
console.log("the username is black");
}
}
if($(inputField[len-1]).val()==0){
console.log("no selected");
$(inputField[len-1]).addClass('input--state-error');
}
});
$('.inputField').click(function(){
$(this).removeClass('input--state-error');
});
//end of front end form validation

});