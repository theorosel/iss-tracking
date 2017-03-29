<?php

    $date = date("Y");

    $astronauts_wikipedia_id = [7426072, 19842490, 1313455, 7425285, 22874788, 470580];
    $results = [];

    foreach ($astronauts_wikipedia_id as $pageKey) {

        $result = [];

        $path_wikipedia_image     = 'https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&pithumbsize=500&pageids='.$pageKey.'';
        $wikipedia_image          = file_get_contents($path_wikipedia_image);
        $forecast_wikipedia_image = json_decode($wikipedia_image);

        $result['image'] = $forecast_wikipedia_image->query->pages->{$pageKey}->thumbnail->source;


        $path_wikipedia_name     = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=extlinks&pageids='.$pageKey.'';
        $wikipedia_name          = file_get_contents($path_wikipedia_name);
        $forecast_wikipedia_name = json_decode($wikipedia_name);

        $result['name']          = $forecast_wikipedia_name->query->pages->{$pageKey}->title;
        $result['extract']       = $forecast_wikipedia_name->query->pages->{$pageKey}->extract;

        $path_wikipedia_info  = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&pageids='.$pageKey.'&rvsection=0';
        $wikipedia_info = file_get_contents($path_wikipedia_info);
        $forecast_wikipedia_info = json_decode($wikipedia_info);

        $astronaut_info = $forecast_wikipedia_info->query->pages->{$pageKey}->revisions[0]->{'*'};
        $matches = array();
        preg_match_all('/\| ?+([a-z0-9_]+) += ?(.+)/', $astronaut_info, $matches, PREG_SET_ORDER);

        for($i = 0; $i < 10; $i++) {
            if($matches[$i][1] == 'birth_date') {

                $age = $matches[$i][2];
                $astronaut_age = array();
                preg_match_all('/[0-9]{4}/', $age, $astronaut_age, PREG_SET_ORDER);
                $result['age'] = $date - (int)$astronaut_age[0][0];
            }
            if ($matches[$i][1] == 'nationality') {

                $nationality = $matches[$i][2];
                $astronaut_nationality = array();
                preg_match_all('/[a-zA-Z]{6,8}/', $nationality, $astronaut_nationality, PREG_SET_ORDER);
                $result['nationality'] = $astronaut_nationality[0][0];
            }
        }

        $results[] = $result;
    }

    echo json_encode($results);

    // echo '<pre>';
    // print_r($results);
    // echo '</pre>';
