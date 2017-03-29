<?php

    // Routing
    if (!empty($url[1])) {

        switch ($url[1]) {

            case '':
                $page_action = 'dashboard';
                $title_page = 'ISS - Dashboard';
                break;

            case 'dashboard':
                $page_action = 'dashboard';
                $title_page = 'ISS - Dashboard';
                break;

            default:
                break;
        }
    }
    else {
        $page_action = 'dashboard';
        $title_page = 'ISS - Dashboard';
    }


    include("includes/handle_home_$page_action.php");
    include('views/partials/header.php');
    include("views/pages/home_$page_action.php");
    include('views/partials/footer.php');
?>
