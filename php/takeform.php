<?php
  // Change this to YOUR address
  $recipient = "oibrahim.2727@gmail.com";
  $email = $_POST['email'];
  $realName = $_POST['name'];
  $subject = "Website Message";
  $body = $_POST['body'];
  # We'll make a list of error messages in an array
  $messages = array();
  # Allow only reasonable email addresses
  if (!preg_match("/^[\w\+\-.~]+\@[\-\w\.\!]+$/", $email)) {
    $messages[] = "That is not a valid email address.";
  }
  # Allow only reasonable real names
  if (!preg_match("/^[\w\ \+\-\'\"]+$/", $realName)) {
    $messages[] = "The real name field must contain only " .
    "alphabetical characters, numbers, spaces, and " .
    "reasonable punctuation. We apologize for any inconvenience.";
  }
  # CAREFUL: don't allow hackers to sneak line breaks and additional
  # headers into the message and trick us into spamming for them!
  $subject = preg_replace('/\s+/', ' ', $subject);
  # Make sure the subject isn't blank afterwards!
  if (preg_match('/^\s*$/', $subject)) {
    $messages[] = "Please specify a subject for your message.";
  }

  $body = $_POST['body'];
  # Make sure the message has a body
  if (preg_match('/^\s*$/', $body)) {
    $messages[] = "Your message was blank. Did you mean to say " .
    "something?";
  }
    if (count($messages)) {
      # There were problems, so tell the user and
      # don't send the message yet
      foreach ($messages as $message) {
        echo("$message\n");
      }
      echo("Click the back button and correct the problems. " .
        "Then click Send Your Message again.");
    } else {
      # Send the email - we're done
  mail($recipient,
        $subject,
        $body,
        "From: $realName <$email>\r\n" .
        "Reply-To: $realName <$email>\r\n");
      echo("Your message has been sent. Thank you!");
    }
?>