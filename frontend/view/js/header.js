/*=============================================
CABEZOTE
=============================================*/

$("#btnCategorias").click(function(){

	if(window.matchMedia("(max-width:767px)").matches){
		//Genera que categorias aparece debajo de btnCategorias
		$("#btnCategorias").after($("#categorias").slideToggle("fast"));

	}else{
		//Genera que categorias aparece debajo de categorias
		$("#cabecera").after($("#categorias").slideToggle("fast"));
	};
});  