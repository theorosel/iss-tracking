<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title> <?= $title_page ?></title>
        <meta name="description" content="A simple webapp to track ISS station in real time." />

        <!-- Fav icon import -->
        <link rel="apple-touch-icon" sizes="57x57" href="assets/favicons/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="assets/favicons/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="assets/favicons/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="assets/favicons/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="assets/favicons/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="assets/favicons/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="assets/favicons/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="assets/favicons/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="assets/favicons/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="assets/favicons/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="assets/favicons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="assets/favicons/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="assets/favicons/favicon-16x16.png">
        <link rel="manifest" href="assets/favicons/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="assets/favicons/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">

        <!-- Font import -->
        <link href="https://fonts.googleapis.com/css?family=Rajdhani:400,700|Roboto:400,700" rel="stylesheet">

        <!-- Css import -->
        <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" />

        <!-- Library import -->
        <script src="http://www.webglearth.com/v2/api.js"></script>
    </head>
    <body>
        <div class="app">
            <div class="iss-loader"></div>
