$(document).ready(function(){
	
	// Código que gestiona los botones del menú de navegación que aumentan o disminuyen el tamaño de la fuente
	var tamFuente = 1; // Tamaño base de la fuente en unidades em	
	$("#btn-aumentar").on("click", function(event){		
		tamFuente += 0.05;
        $("main").css("font-size", tamFuente + "em");
	});
	$("#btn-disminuir").on("click", function(event){
		if (tamFuente > 0.7){ // Que no disminuya menos de 0.7em la fuente para que no se haga demasiado pequeño el texto
			tamFuente -= 0.05;
			$("main").css("font-size", tamFuente + "em");
		}
	});	
	
	
	//Código que actualiza la fecha y hora en el footer
	function actualizaHora(){
		 var fecha = new Date();
        
        // Obtener fecha y hora en formato local 
        var fechaAhora = fecha.toLocaleDateString() + " - " + fecha.toLocaleTimeString();        
       
        // Escribe la fecha en el footer
        $("#txt-fecha").text(fechaAhora);        
    }

    // Ejecutar la función al cargar la página
    actualizaHora();
	
    // Configurar para que se repita cada 1000 milisegundos (1 segundo)
    setInterval(actualizaHora, 1000);	
});



