$(document).ready( function(){
	//Etapa 1:

	$("#js-back-arrow").hide();
 	$("#js-menu-icon").hide();

 	//Etapa 2: 
 	$(".callout-news").append(printNews());

function printNews(){
	$('p').text("NUEVAS RECETAS");
}


	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activitiesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/

	//Etapa 3:
function renderHighlightedRecipes(recipesArray) {
	//console.log('Recipes: ', recipesArray);
	recipesArray.forEach(function(element){
 		if (element.highlighted == true){
 			renderRecipe(element);
		}
	})
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/

	//Etapa 4:
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	$(".list-recipes").append(`
		<a class="item-recipe" href="#">
  			<span class="attribution">
  			 	<span class="title-recipe">`+ recipe.title+`</span>
	   			<span class="metadata-recipe">
    				<span class="author-recipe">`+ recipe.source.name +`</span>
     				<span class="bookmarks-recipe">
     					<span class="icon-bookmark"></span> 
	      				</span>
    			</span>
	  			</span>
    			<img src="img/recipes/320x350/`+ recipe.name +`.jpg" />
		</a>
		`)
}



/*
* Función que se encarga de pintar todas las actividades
*/
	//Etapa 5:
 function renderActivities(activitiesArray) {
  	console.log('Activities: ', activitiesArray);
	activitiesArray.forEach(function(element){
		renderActivity(element);
	})
  	if(activitiesArray.length > 0){
  		$(".wrapper-message").hide();
  	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


