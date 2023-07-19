<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $apellido = $_POST["apellido"];
  $ciudad = $_POST["ciudad"];
  $tipo_proyecto = $_POST["tipo_proyecto"];
  $telefono = $_POST["telefono"];
  
  // Configura los datos del correo electrónico
  $to = "octavior128@gmail.com"; // Cambia esto por tu dirección de correo electrónico
  $subject = "Nuevo formulario de contacto";
  $message = "Nombre: " . $nombre . "\n";
  $message .= "Apellido: " . $apellido . "\n";
  $message .= "Ciudad: " . $ciudad . "\n";
  $message .= "Tipo de Proyecto: " . $tipo_proyecto . "\n";
  $message .= "Teléfono: " . $telefono . "\n";
  
  // Envía el correo electrónico
  $headers = "From: octavior128@gmail.com\r\n";
  $headers .= "Reply-To: octavior128@gmail.com\r\n";
  
  if (mail($to, $subject, $message, $headers)) {
    echo "El correo electrónico se ha enviado correctamente.";
  } else {
    echo "Hubo un error al enviar el correo electrónico.";
  }
}
?>
