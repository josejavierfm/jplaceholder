/*
	jplaceholder.JS
	V. 1.0.0
	José Javier Fernández Mendoza 2018
	Require jquery
	Añade un parrafo a cada elemento con el atributo "placeholder" para poner el texto debajo si no tiene valor
	El parrafo se llamara igual que la caja asociada terminando en _placeholder y tendrá la clase "jPHempty"
	Añade el codigo necesario css en el head 
	
	Para llamarlo añadir la linea despues de incluir jquery y este fichero
	  $('input').jPlaceHolderEmpty();
	
*/
(function($) {
  'use strict';

  $.fn.jPlaceHolderEmpty = function() {

    return this.each(function(i, element) {
		$(element).keyup(function updateCharCounter() {

			var $me = $(this);
			var PH = $me.attr('placeholder');
			if (PH!="" && PH!=undefined){
				var charCount = $me.val().length;
				var nombrecajaPH=$me.prop('id')+"_placeholder";
				var cajaPH = $('#'+nombrecajaPH);
				if (charCount>0 && $me.is(":visible")){
					cajaPH.text('' + PH);
				}else{
					cajaPH.text('');
				}
			}
		});
	   
        var $me = $(this);
			var PH = $me.attr('placeholder');
			if (PH!="" && PH!=undefined){
				var charCount = $me.val().length;
				var nombrecajaPH=$me.prop('id')+"_placeholder";
				var cajaPH = $('#'+nombrecajaPH);
				if (cajaPH){
					$me.after('<p id="'+nombrecajaPH+'" class="jPHempty"></p>');
				}
				cajaPH = $('#'+nombrecajaPH);
				if (charCount>0 && $me.is(":visible")){
					cajaPH.text('' + PH);
				}else{
					cajaPH.text('');
				}
			}
     
    });
  };
  /* añade css para las cajas de manera automatica */
  $( "<style>.jPHempty {  float: right;  clear: both;  margin-bottom: 10px;  font: 400 0.7em 'Roboto';  text-align: right;  color: #777777;}</style>" ).appendTo( "head" )
  
}(jQuery));
