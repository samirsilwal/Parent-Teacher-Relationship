$(document).ready(function(){
	console.log("document is ready");

	$('.signup__option>.btn').click(function(){
		var tab_id=$(this).attr('data-tab');
		
		if(this.className!="btn btn--active"){
			console.log("true");
	   //      if(tab_id=='teacher'){
	   //      	 $('.signup').css("height","93%");
				// }else{
				// 	 $('.signup').css("height","80%");
				// }

		$('.signup__option>.btn').removeClass('btn--active');
		$('.signup__form').removeClass('signup__form--open');
		$(this).addClass('btn--active');
		$('#'+tab_id).addClass('signup__form--open');
	        
	}
	})


	
});