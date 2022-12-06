<?php

    // Set up connection creds

    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    $user = "u1nh9wzgmxsnm";
    $pass = "@.1c]b1lj%%n"; // For WAMP
   
    $url = "localhost";
    // Change the database name for each site
    $db = "dbudhb6jpsa9uh";

    // Connect to db
    //$link = mysqli_connect($url, $user, $pass, $db); //Mac
    $link = mysqli_connect($url, $user, $pass, $db); //PC

    // Check our connection
    if(!$link) {
        error_log("Connection error: " . mysqli_connect_error());
    }


?>