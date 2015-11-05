
$(document).ready(function(){
	

	
	
	$(function() {

    	$( "#datepicker" ).datepicker({

    		showAnim: "explode",
     		yearRange: "1920:2020",
      	changeMonth: true,
      	changeYear: true

    	});

  	});
	
	$(function() {

    	$( document ).tooltip({

  			show: { effect: "blind", duration: 800 },
  			position: { my: "left center-50", at: "right bottom" }

			});

  	});

	$(function() {

    	$( "#sortable" ).sortable({
      	placeholder: "ui-state-highlight"

      	});

    	$( "#sortable" ).disableSelection();
 
  	});

});





//