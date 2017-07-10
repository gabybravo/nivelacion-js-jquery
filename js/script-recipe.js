//Etapa 7:
$(document).ready( function(){
	console.log("HTML listo.");

//Etapa 8 y 9:
$(".js-show-recipe").click(function(event) {
		console.log("js-show-recipe");
		$(".page.recipe").removeClass('make');	
		$(this).addClass('active');
		$(".js-show-make").removeClass('active');
	});

	$(".js-show-make").click(function(event) {
		console.log("js-show-make");
		$(".page.recipe").addClass('make');
		$(this).addClass('active');
		$(".js-show-recipe").removeClass('active');
	});


});