ISS tracking
=================

:rocket: A single page app to follow ISS in real time.
* [Live Demo](http://isstracker.theorosel.com/)

### Features
- Speed, city overflown and altitude
- See where the station is on the map and his path
- See all the tweets of ISS team on the map according to ISS position at the time of each
- Tweets feed and map localisation on click
- live youtube
- Team slider

### API use
* [Media wiki](https://www.mediawiki.org/wiki/MediaWiki/fr)
* [wheretheiss](http://wheretheiss.at/w/developer)
* [Twitter](https://dev.twitter.com/rest/public)

### Installation
- Import database structure from `database.sql`
- Update config values in `config.php`
- Set the `iss-tracking` folder as Web server root

- Open project folder
```shell
cd starter
```
* Install packages
```shell
npm install
```
* Run Gulp
```shell
gulp
```

### Edit the project
If you wish to update project files, all assets sources are available in the `src` folder with a gulp configuration to update output assets.
