<?php

    require ('twitteroauth-master/autoload.php');
    use Abraham\TwitterOAuth\TwitterOAuth;

    define('CONSUMER_KEY','fUuaPJ6iPgO7Lc2YxsuHesxzo');
    define('CONSUMER_SECRET','SAJ9arhfdEkkiVrDMK4Ldzxc1KNgpN2GAMfiebI2oGpEL1na2A');
    $access_token ='3005187843-rduOgPIS1tJqBmtqAA3zIANP0mov9UPmLEDF1hM';
    $access_token_secret ='I2mZCnrul1Oajc8nSH0nd57v3vtzqJ5skxcXey5sLTjmM';

    $connexion = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $access_token, $access_token_secret);
    $content = $connexion->get("account/verify_credentials");

    $twitter_accounts = ['AstroPeggy', 'astro_kimbrough', 'Space_Station', 'Thom_astro'];

    // API request for each twitter accounts
    foreach ($twitter_accounts as $key => $_account) {

        $prepare = $db->prepare('SELECT tweet_id FROM tweets');
        $prepare->execute();
        $used_id = $prepare->fetchAll();
        $highter_id = $used_id[0]->tweet_id;

        for($i = 0; $i < sizeof($used_id); $i++){

            if($used_id[$i]->tweet_id > $highter_id) {
                $highter_id = $used_id[$i]->tweet_id;
            }
        }

        $tweets = $connexion->get('statuses/user_timeline', ['screen_name' =>$_account, 'count' =>1, 'tweet_mode'=>'extended',  'since_id' => $highter_id]);

        // Create table for each tweets
        foreach($tweets as  $key=> $_tweets){
            $tweet_date = new DateTime($_tweets->created_at);

            $data = array();
            $data['tweet_id'] = $_tweets->id;
            $data['date'] = $tweet_date->format("U");
            $data['text'] = $_tweets->full_text;
            $data['image'] = $_tweets->entities->media[0]->media_url_https;
            $data['url'] = $_tweets->entities->media[0]->url;
            $data['retweets'] = $_tweets->retweet_count;
            $data['likes'] = $_tweets->favorite_count;
            $data['name'] = $_tweets->user->name;
            $data['pseudo'] = $_tweets->user->screen_name;
            $data['picture'] = $_tweets->user->profile_image_url_https;

            $prepare = $db->prepare('INSERT INTO tweets (tweet_id, tweet_date, tweet_text, image, url, retweets, likes, name, pseudo, picture) VALUES (:tweet_id, :tweet_date, :tweet_text, :image, :url, :retweets, :likes, :name, :pseudo, :picture)');
            $prepare->bindValue('tweet_id', $data['tweet_id']);
            $prepare->bindValue('tweet_date', $data['date']);
            $prepare->bindValue('tweet_text', $data['text']);
            $prepare->bindValue('image', $data['image']);
            $prepare->bindValue('url', $data['url']);
            $prepare->bindValue('retweets', $data['retweets']);
            $prepare->bindValue('likes', $data['likes']);
            $prepare->bindValue('name', $data['name']);
            $prepare->bindValue('pseudo', $data['pseudo']);
            $prepare->bindValue('picture', $data['picture']);
            $prepare->execute();
        }
    }

    // Database query
    $prepare = $db->prepare('SELECT * FROM tweets ORDER BY tweet_date DESC LIMIT 10'); //SELECT * FROM tweets ORDER BY tweet_date DESC LIMIT 6
    $prepare->execute();
    $tweets_database = $prepare->fetchAll(PDO::FETCH_ASSOC);

    foreach($tweets_database as &$_tweet)
    {
        $_tweet['tweet_text'] = utf8_encode($_tweet['tweet_text']);
    }

    echo json_encode($tweets_database);
