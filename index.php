<?php

    session_start();

    // Include config
    include('config.php');

    // Include functions
    include('includes/functions.php');

    // Get url and and explode it with '/' separator
    $url = isset($_GET['url']) ? trim($_GET['url']) : '' ;
    $url = explode('/', $url);


    // API
    if ($url[0] == 'api') {
        if(isset($url[1])) {

            $file = $url[1];

            if(file_exists("includes/api/$file.php")) {
                include("includes/api/$file.php");
            }

            else {
                header("HTTP/1.0 404 Not Found");
            }
        }

    }

    // Routing
    else {
        switch ($url[0]) {

            case '':
                $page = 'home';
                $title_page = 'home';
                break;

            case 'home':
                $page = 'home';
                $title_page = 'home';
                break;

            default:
                break;
        }

        include('views/partials/header.php');
        include("views/pages/$page.php");
        include('views/partials/footer.php');
    }
