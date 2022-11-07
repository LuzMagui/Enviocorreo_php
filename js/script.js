$(document).ready(function(){
    "alert('Este es un ejemplo, se muestra mensaje al recargar la pagina');"
    $('#btnSend').click(function(){
        var  errores = '';

//validaciones
        if( $('#names').val()== ''){
            errores += '<p>Escriba el nombre</p>';
        $('#names').css("border-bottom-color", "#F14B4B")
        }else{
            $('#names').css("border-bottom-color", "#088E36")
        }
        
        if( $('#email').val()== ''){
            errores += '<p>Escriba el correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        }else{
            $('#email').css("border-bottom-color", "#088E36")
        }
        
        if( $('#mensaje').val()== ''){
            errores += '<p>Escriba un mensaje</p>';
            //se pone rojo si esta vacio
            $('#mensaje').css("border-bottom-color", "#F14B4B")

        }else{
            //regresa al color cuando se revalida
            $('#mensaje').css("border-bottom-color", "#088E36")
        }

        //enviando mensaje
        if(errores== '' == false){
            var mensajeModal = '<div class="modal_wrap">'+ 
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'
            $('body').append(mensajeModal);
        }

        //para cerrar la ventana emergente
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });
});