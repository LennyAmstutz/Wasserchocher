<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Bitte füllen Sie alle Felder aus und geben Sie eine gültige E-Mail-Adresse an.";
        exit;
    }

    $recipient = "lennyamstutz@gmail.com";
    $subject = "Neue Nachricht von $name";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Nachricht:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Vielen Dank! Ihre Nachricht wurde gesendet.";
    } else {
        http_response_code(500);
        echo "Oops! Etwas ist schief gelaufen und wir konnten Ihre Nachricht nicht senden.";
    }
} else {
    http_response_code(403);
    echo "Es gab ein Problem mit Ihrer Anfrage. Bitte versuchen Sie es erneut.";
}
?>

