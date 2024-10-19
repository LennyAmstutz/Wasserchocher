<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'C:\xampp\htdocs\dein_projekt\PHPMailer\src\Exception.php';
require 'C:\xampp\htdocs\dein_projekt\PHPMailer\src\PHPMailer.php';
require 'C:\xampp\htdocs\dein_projekt\PHPMailer\src\SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail = new PHPMailer(true);

        try {
            // Server-Einstellungen
            $mail->SMTPDebug = 0; // Debug-Ausgabe deaktivieren
            $mail->isSMTP(); // SMTP verwenden
            $mail->Host = 'smtp.gmail.com'; // SMTP-Server
            $mail->SMTPAuth = true; // SMTP-Authentifizierung aktivieren
            $mail->Username = 'your-email@gmail.com'; // SMTP-Benutzername
            $mail->Password = 'your-password'; // SMTP-Passwort
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // TLS-Verschlüsselung
            $mail->Port = 587; // TCP-Port

            // Empfänger
            $mail->setFrom('your-email@gmail.com', 'Mailer');
            $mail->addAddress('lennyamstutz@gmail.com', 'Joe User'); // Empfänger hinzufügen

            // Inhalt
            $mail->isHTML(false); // E-Mail-Format auf Text setzen
            $mail->Subject = 'Neue Nachricht von ' . $name;
            $mail->Body = "Name: $name\nEmail: $email\n\nNachricht:\n$message\n";

            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "Bitte füllen Sie alle Felder korrekt aus.";
    }
} else {
    echo "Ungültige Anforderung.";
}
?>
