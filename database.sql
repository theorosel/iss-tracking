-- phpMyAdmin SQL Dump
-- version 4.6.5.1
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:8889
-- Généré le :  Ven 31 Mars 2017 à 15:52
-- Version du serveur :  5.6.34
-- Version de PHP :  7.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `iss`
--

-- --------------------------------------------------------

--
-- Structure de la table `tweets`
--

CREATE TABLE `tweets` (
  `id` int(11) NOT NULL,
  `tweet_id` bigint(20) NOT NULL,
  `tweet_date` int(11) NOT NULL,
  `tweet_text` varchar(255) NOT NULL,
  `image` text,
  `url` varchar(255) DEFAULT NULL,
  `retweets` int(11) NOT NULL,
  `likes` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `picture` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `tweets`
--

INSERT INTO `tweets` (`id`, `tweet_id`, `tweet_date`, `tweet_text`, `image`, `url`, `retweets`, `likes`, `name`, `pseudo`, `picture`) VALUES
(114, 847071559659356162, 1490792572, 'Good morning Earth from @Space_Station! https://t.co/DcixD06Nfr', 'https://pbs.twimg.com/media/C8FmekvXQAA6YFf.jpg', 'https://t.co/DcixD06Nfr', 55, 94, 'Shane Kimbrough', 'astro_kimbrough', 'https://pbs.twimg.com/profile_images/721061382440017921/oeAqFVPq_normal.jpg'),
(115, 847084435937857536, 1490795642, 'Encore un patch pour notre collection! Ce port d’amarrage accueillera de nouveau un cargo #Dragon en mai; l’autre est prêt pour le #Cygnus https://t.co/MuyxMycwDv', 'https://pbs.twimg.com/media/C8FyvczXkAEDmyq.jpg', 'https://t.co/MuyxMycwDv', 25, 102, 'Thomas Pesquet', 'Thom_astro', 'https://pbs.twimg.com/profile_images/831136830745636865/PR5Py0ZR_normal.jpg'),
(116, 847100602815537152, 1490799496, 'Adding one patch to the collection! This docking port will welcome @SpaceX Dragon again in May, while the other one is ready for Cygnus https://t.co/pdMiO0U4A5', 'https://pbs.twimg.com/media/C8GBgRtXkAA_Cks.jpg', 'https://t.co/pdMiO0U4A5', 5, 23, 'Thomas Pesquet', 'Thom_astro', 'https://pbs.twimg.com/profile_images/831136830745636865/PR5Py0ZR_normal.jpg'),
(117, 847128358299193344, 1490806114, 'Astronaut Peggy Whitson is set to go on her eighth #spacewalk Thursday morning at 8am ET (12pm GMT). https://t.co/He7pBZTJjP https://t.co/nsgh3bsPFc', 'https://pbs.twimg.com/media/C8GaLsrX0AA3LKH.jpg', 'https://t.co/nsgh3bsPFc', 16, 34, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(118, 847149528251719684, 1490811161, 'The @Space_Station is massive! We had to break it up into pieces to fit it in our huge pool! Read the story here: https://t.co/0nsooLrDBk https://t.co/9HpJLD2JCP', 'https://pbs.twimg.com/media/C8Gt9bNXwAUBQPN.jpg', 'https://t.co/9HpJLD2JCP', 14, 37, 'Peggy Whitson', 'AstroPeggy', 'https://pbs.twimg.com/profile_images/626900284149735424/AZTSesIM_normal.jpg'),
(119, 847156636510818304, 1490812856, '#Osaka et deux cours d’eau parallèles qui vont plonger dans la baie ', 'https://pbs.twimg.com/media/C8G0JXdW0AMxqSB.jpg', 'https://t.co/ZxPhmSJDPW', 41, 85, 'Thomas Pesquet', 'Thom_astro', 'https://pbs.twimg.com/profile_images/831136830745636865/PR5Py0ZR_normal.jpg'),
(120, 847171020578586624, 1490816285, 'Osaka with its interesting parallel rivers ', 'https://pbs.twimg.com/media/C8HBhYUW4AASZY5.jpg', 'https://t.co/3koW2RvTVh', 21, 55, 'Thomas Pesquet', 'Thom_astro', 'https://pbs.twimg.com/profile_images/831136830745636865/PR5Py0ZR_normal.jpg'),
(121, 847178327525937152, 1490818027, '@thebenhartman Astronaut @CommanderMLA has conducted 10 spacewalks, the most by @NASA_Astronauts.', NULL, NULL, 0, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(122, 847200107720257536, 1490823220, 'RT @Astro_Jessica: Today @NASA_Johnson @VicGlover &amp; I sampled food we\'ll eat @Space_Station 1 day. @TheRealBuzz, ever imagine tofu &amp; brusse…', NULL, NULL, 10, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(123, 847317755850129409, 1490851270, 'RT @Astro_Jessica: Check out the amazing #GoPro footage @Thom_astro captured during last week\'s @Space_Station #spacewalk @NASA @esa @NASA_…', NULL, NULL, 52, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(124, 847362010891247617, 1490861821, 'C’est maintenant au tour d’@AstroPeggy d’accompagner @astro_kimbrough dans l’espace! De mon côté je serai en charge de l’ISS en leur absence https://t.co/vCG3QmjdnW', 'https://pbs.twimg.com/media/C8JvFsnV0AAWszU.jpg', 'https://t.co/vCG3QmjdnW', 48, 148, 'Thomas Pesquet', 'Thom_astro', 'https://pbs.twimg.com/profile_images/831136830745636865/PR5Py0ZR_normal.jpg'),
(125, 847380390561972227, 1490866203, 'Watch @AstroPeggy with @Astro_Kimbrough go on #spacewalk. Live NASA TV coverage starts today at 5:30am ET. https://t.co/ZN3SDxsV9o https://t.co/J5rQE50C6D', 'https://pbs.twimg.com/media/C8I92JbX0AA5wpP.jpg', 'https://t.co/J5rQE50C6D', 10, 24, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(126, 847380586918404098, 1490866250, 'Here the robotic arm was moving a piece of the @Space_Station following last week’s #spacewalk. A docking port for future space vehicles! https://t.co/n5NECnmTz5', 'https://pbs.twimg.com/media/C8J_WvzUIAAzz3-.jpg', 'https://t.co/n5NECnmTz5', 12, 30, 'Thomas Pesquet', 'Thom_astro', 'https://pbs.twimg.com/profile_images/831136830745636865/PR5Py0ZR_normal.jpg'),
(127, 847418662252232704, 1490875328, 'Flight Director Emily Nelson and Capcoms Steve Bowen and Anne McClain lead the team overseeing today\'s #spacewalk. https://t.co/qpyi2LM11l https://t.co/hzxbzLQ4jx', 'https://pbs.twimg.com/media/C8Kixp8VYAMeFEe.jpg', 'https://t.co/hzxbzLQ4jx', 3, 9, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(128, 847421578581204994, 1490876023, '.@AstroPeggy reaches work site and begins working on the Pressurized Mating Adapter-3. https://t.co/qpyi2LM11l https://t.co/4nXvDRfIR5', 'https://pbs.twimg.com/media/C8KlbbiVwAIfB7r.jpg', 'https://t.co/4nXvDRfIR5', 6, 21, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(129, 847439483360337921, 1490880292, '.@Astro_Kimbrough installs computer relay boxes, ground uploads new software for @Commercial_Crew vehicles. https://t.co/qpyi2LM11l https://t.co/LIsAlzMOZC', 'https://pbs.twimg.com/media/C8K1tnXV0AEWORD.jpg', 'https://t.co/LIsAlzMOZC', 52, 121, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(130, 847442586268688385, 1490881031, '@Doogits @NASA Here is a set of spacesuit videos from our YouTube channel... https://t.co/oN9wTpwnT9', NULL, NULL, 0, 1, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(131, 847447828494376960, 1490882281, 'Spacewalkers installing shields on Tranquility module. You can see #BEAM from @BigelowSpace at right. https://t.co/qpyi2LM11l https://t.co/9r4YAeNJ2q', 'https://pbs.twimg.com/media/C8K9TatUwAA3IMB.jpg', 'https://t.co/9r4YAeNJ2q', 1, 1, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(132, 847454730578046977, 1490883927, '@TweetWithSaber Yes.', NULL, NULL, 0, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(133, 847456426549157893, 1490884331, 'Shane and Peggy on their way to their first @spacewalk tasks\\n\\n@astro_kimbrough et @AstroPeggy en route vers leur zone de travail https://t.co/TUEajnikjm', 'https://pbs.twimg.com/media/C8LFE8gVoAAjQ7s.jpg', 'https://t.co/TUEajnikjm', 0, 0, 'Thomas Pesquet', 'Thom_astro', 'https://pbs.twimg.com/profile_images/831136830745636865/PR5Py0ZR_normal.jpg'),
(134, 847456684330975233, 1490884393, '@diva6684 @NASA @facebook @YouTube @Ustream Now... https://t.co/R0mHLdBfoO', NULL, NULL, 0, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(135, 847457685108736001, 1490884631, '@MikeH_MapleGrov For thermal protection and micrometeoroid protection.', NULL, NULL, 0, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(136, 847464025617190912, 1490886143, 'RT @NASA_Johnson: Flight Director Emily Nelson, CapCom @AstroAnnimal &amp; the Mission Control team guide @AstroPeggy &amp; @astro_kimbrough during…', NULL, NULL, 17, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(137, 847470622317846529, 1490887716, 'Astronauts install shields on Tranquility despite inadvertent loss of one shield. https://t.co/qpyi2LM11l https://t.co/dgazHDSBMW', 'https://pbs.twimg.com/media/C8LSCDZV0AIj5ZY.jpg', 'https://t.co/dgazHDSBMW', 0, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(138, 847476125462806528, 1490889028, 'Cameras spot missing shield to protect Tranquility module from micrometeoroids. Astronauts installing new cover in its place. https://t.co/FStj6cJEHD', 'https://pbs.twimg.com/media/C8LXCahUMAA5jvj.jpg', 'https://t.co/FStj6cJEHD', 16, 51, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(139, 847485765671989248, 1490891326, 'Spacewalkers finish covering module for thermal and micrometeoroid protection. Next, installation work on adapter. https://t.co/qpyi2LM11l https://t.co/x1oHlQcVK7', 'https://pbs.twimg.com/media/C8Lfzn8VoAAlJf_.jpg', 'https://t.co/x1oHlQcVK7', 0, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(140, 847488690653872130, 1490892024, 'Astronaut Peggy Whitson broke @Astro_Suni\'s spacewalk record at 11:51am ET today. She is on her 8th #spacewalk now. https://t.co/LgLjwJtpQw https://t.co/CLYitGcPKm', 'https://pbs.twimg.com/media/C8Lhz_RUIAAwu14.jpg', 'https://t.co/CLYitGcPKm', 0, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(141, 847493749902946305, 1490893230, '@TylerLDaugherty .@Thom_astro monitors the spacewalkers. Three cosmonauts work on daily tasks. Oleg Novitskiy will help spacewalkers back in airlock.', NULL, NULL, 0, 1, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(142, 847494894553714688, 1490893503, 'Spacewalkers working on attaching shield to Pressurized Mating Adapter for micrometeoroid protection. https://t.co/qpyi2LM11l https://t.co/wJ8zlWHu8U', 'https://pbs.twimg.com/media/C8LoHA2VYAMHzmN.jpg', 'https://t.co/wJ8zlWHu8U', 2, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(143, 847502187341070336, 1490895241, '@michele0511 @NASA The station crew uses GMT, or Greenwich Mean Time.', NULL, NULL, 0, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(144, 847507500936986624, 1490896508, '.@AstroPeggy and @Astro_Kimbrough begin wrapping up their spacewalk and cleaning up the work site. https://t.co/qpyi2LM11l https://t.co/nCfTq4ve7i', 'https://pbs.twimg.com/media/C8LzkzmUwAUqbfM.jpg', 'https://t.co/nCfTq4ve7i', 2, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(145, 847519496461930496, 1490899368, '.@AstroPeggy and @Astro_Kimbrough complete #spacewalk at 2:33pm ET after 7-hours and 4-minutes. https://t.co/qpyi2LM11l https://t.co/8AZhYPbMa4', 'https://pbs.twimg.com/media/C8L-e6fV0AEY78s.jpg', 'https://t.co/8AZhYPbMa4', 30, 87, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(146, 847530564320088065, 1490902007, '.@Astro_Kimbrough and @AstroPeggy complete record breaking #spacewalk to get station ready for @Commercial_Crew. https://t.co/Q66whJr3ZV https://t.co/7NL3E8uNDk', 'https://pbs.twimg.com/media/C8MIHH0WsAQ_k8Y.jpg', 'https://t.co/7NL3E8uNDk', 0, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(147, 847534945509687296, 1490903052, '#ICYMI: Add \'NASA\' on Snapchat ', 'https://pbs.twimg.com/ext_tw_video_thumb/847534896071532544/pu/img/pUzxaAhjzpkeya88.jpg', 'https://t.co/cL3U2KGldo', 3, 4, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(148, 847561609727811584, 1490909409, '@MitchMcConell @NASA 3/3: More about orbital debris... https://t.co/Yte2ROh6Wn”', NULL, NULL, 0, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(149, 847584253613191168, 1490914808, 'Our beautiful planet Earth in the reflection of my visor during today’s #spacewalk with @AstroPeggy. https://t.co/OZJzz2Ea24', 'https://pbs.twimg.com/media/C8M5YOmVwAAQ3x6.jpg', 'https://t.co/OZJzz2Ea24', 3, 7, 'Shane Kimbrough', 'astro_kimbrough', 'https://pbs.twimg.com/profile_images/721061382440017921/oeAqFVPq_normal.jpg'),
(150, 847651702014566401, 1490930889, 'RT @astro_kimbrough: Our beautiful planet Earth in the reflection of my visor during today’s #spacewalk with @AstroPeggy. https://t.co/OZJz…', NULL, NULL, 662, 0, 'Intl. Space Station', 'Space_Station', 'https://pbs.twimg.com/profile_images/822552192875892737/zO1pmxzw_normal.jpg'),
(151, 847726133244121088, 1490948634, '@AstroPeggy during her record-breaking spacewalk!\\n\\n@AstroPeggy en train de battre 2 records à la fois pour une astronaute! https://t.co/77tB2bslXL', 'https://pbs.twimg.com/media/C8O5sBvU0AQgOvS.jpg', 'https://t.co/77tB2bslXL', 17, 28, 'Thomas Pesquet', 'Thom_astro', 'https://pbs.twimg.com/profile_images/831136830745636865/PR5Py0ZR_normal.jpg'),
(152, 847753250522619904, 1490955100, 'On the earth\'s dark side a spacewalk feels like scuba diving at night\\n\\nSortir dans l’obscurité c’est 1 peu comme faire de la plongée de nuit https://t.co/HNed3UdOsH', 'https://pbs.twimg.com/media/C8PSsOJV0AMZsNK.jpg', 'https://t.co/HNed3UdOsH', 90, 185, 'Thomas Pesquet', 'Thom_astro', 'https://pbs.twimg.com/profile_images/831136830745636865/PR5Py0ZR_normal.jpg'),
(153, 847790399045414912, 1490963956, 'Un autre paradis aux antipodes: Tahiti et la Polynésie française ! ', 'https://pbs.twimg.com/media/C8P0HzxXYAAjigm.jpg', 'https://t.co/UuipnyliiE', 71, 195, 'Thomas Pesquet', 'Thom_astro', 'https://pbs.twimg.com/profile_images/831136830745636865/PR5Py0ZR_normal.jpg'),
(154, 847805941710036992, 1490967662, 'Atoll in French Polynesia (not sure which one exactly!) ', 'https://pbs.twimg.com/media/C8P32JNXcAAOytu.jpg', 'https://t.co/LzvMBjfUPN', 36, 79, 'Thomas Pesquet', 'Thom_astro', 'https://pbs.twimg.com/profile_images/831136830745636865/PR5Py0ZR_normal.jpg');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `tweets`
--
ALTER TABLE `tweets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `tweets`
--
ALTER TABLE `tweets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=155;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
