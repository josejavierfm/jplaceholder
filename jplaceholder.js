/*
	jplaceholder.JS
	V. 1.0.4
	José Javier Fernández Mendoza 2021/03
	Require jquery
	Añade un parrafo a cada elemento con el atributo "placeholder" para poner el texto debajo si no tiene valor
	El parrafo se llamara igual que la caja asociada terminando en _placeholder y tendrá la clase "jPHempty"
	Añade el codigo necesario css en el head 
	1.0.4 lo aplica por defecto a los select tambien
	1.0.3 una variable (jplaceevenempty)indica si aparece incluso cuando no está vacio y nuevo parametro de jrango
	1.0.2 Si la caja de texto está oculta el placeholder tambien tiene que estar oculta
	1.0.1 Ya no es necesario añadir la linea despues, lo hace al finalizar la carga de la pagina automaticamente.
	1.0.0 Para llamarlo añadir la linea despues de incluir jquery y este fichero
	  $('input').jPlaceHolderEmpty();
	
*/
(function($) {
	'use strict';
  
	$.fn.jPlaceHolderEmpty = function() {
  
	  return this.each(function(i, element) {
		  $(element).change(function updateCharCounter() {
  
			  var $me = $(this);
			  var PH = $me.attr('placeholder');
			  var Rango = $me.attr('jrango');
			  if ((PH!="" && PH!=undefined) || (Rango!="" && Rango!=undefined)){
				  var charCount = $me.val().length;
				  var nombrecajaPH=$me.prop('id')+"_placeholder";
				  var cajaPH = $('#'+nombrecajaPH);
				  if ($me.is(":visible")){
					  if ((jplaceevenempty || charCount>0) && $me.is(":visible")){
						  var t='';
						  if (PH!="" && PH!=undefined){t+=PH;}
						  if (Rango!="" && Rango!=undefined){t+=' '+Rango;}
						  cajaPH.text('' + t);
					  }else{
						  cajaPH.text('');
					  }
					  cajaPH.show();
				  }else{
					  cajaPH.hide();
				  }
			  }
		  });
		 
		  var $me = $(this);
			  var PH = $me.attr('placeholder');
			  var Rango = $me.attr('jrango');
			  if ((PH!="" && PH!=undefined) || (Rango!="" && Rango!=undefined)){
				  var charCount = $me.val().length;
				  //comprobamos que no exista ya
				  var nombrecajaPH=$me.prop('id')+"_placeholder";
				  var cajaPH = $('#'+nombrecajaPH);
				  
				  if (cajaPH.length==0){
					  $me.after('<p id="'+nombrecajaPH+'" class="jPHempty"></p>');
				  }
				  cajaPH = $('#'+nombrecajaPH);
				  if ((jplaceevenempty || charCount>0) && $me.is(":visible")){
					var t='';
					if (PH!="" && PH!=undefined){t+=PH;}
					if (Rango!="" && Rango!=undefined){t+=' '+Rango;}
					cajaPH.text('' + t);
				  }else{
					  cajaPH.text('');
				  }
				  if ($me.is(":visible")){
					  cajaPH.show();
				  }else{
					  cajaPH.hide();
				  }
			  }
	   
	  });
	};
	/* añade css para las cajas de manera automatica */
	$( "<style>.jPHempty {  float: right;  clear: both;  margin-bottom: 10px;  font: 400 0.7em 'Roboto';  text-align: right;  color: #777777;}</style>" ).appendTo( "head" )
	
  }(jQuery));
  var jplaceevenempty=false;
  $( document ).ready(function() {
	   $('input').jPlaceHolderEmpty();
	   $('select').jPlaceHolderEmpty();
  });