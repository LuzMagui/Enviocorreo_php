<?php
//llamar a los campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$para = 'floresgarcial881@gmail.com', 'floresgarcial881@gmail.com';
//$destinatario = 'floresgarcial881@gmail.com', 'floresgarcial881@gmail.com';
$destinatario2 ="ortro correos";
$asunto = "Correo enviado desde php";

$carta = "De: $nombre \n ";
$carta .= "Correo: $correo \n";
$carta .= "Mensaje $mensaje";

//enciando mensaje
mail($destinatario,$destinatario2,$asunto,$carta);
header('Location:mensaje_exito.html')

?>