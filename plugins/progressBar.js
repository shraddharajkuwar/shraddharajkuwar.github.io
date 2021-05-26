// $(function () { 
//     $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
//   });  
  
//    $( page ).scroll(function() {   
//     if($( window ).scrollTop() > 10){  
//     $(".progress-bar").each(function(){
//       each_bar_width = $(this).attr('aria-valuenow');
//       $(this).width(each_bar_width + '%');
//     });
         
//     }  
//    });
$('.progress-bar').waypoint({
	handler: function (direction) {
			var el = $(this.element);
			var value = el.data('value');
		
		el.animate({
			width: value + '%'
		}, 500);
				
		if(el.parent().is(':last-child')) {
			//
		}
		
	},
	offset: '80%',
})
