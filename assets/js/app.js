var api ={
	url:"https://laboratoria.cuadra.co/api/v1/students/"

};
var $alumnasList = $("#alumnas-list")
var  cargarPagina = function() {
	cargarAlumnas();
};

var cargarAlumnas = function(){
	$.getJSON(api.url, function(alumnas){
		alumnas.forEach(crearlista);
	});
};


var plantillaAlumna ='<li class="col-12">'+'**nombre**'+' '+'<input type="checkbox">'+ '</li>';

var crearlista = function(alumna){
	var nuevaPlantilla=" ";
	var nombre = alumna.name;
	
	nuevaPlantilla += plantillaAlumna.replace('**nombre**',nombre);
	$alumnasList.append(nuevaPlantilla);
}

$(document).ready(cargarPagina);