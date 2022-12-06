-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 01, 2022 at 09:08 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_project`
--

DROP TABLE IF EXISTS `tbl_project`;
CREATE TABLE IF NOT EXISTS `tbl_project` (
  `project_id` mediumint(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(250) CHARACTER SET utf8 NOT NULL,
  `id` varchar(50) CHARACTER SET utf8 NOT NULL,
  `bio` varchar(250) CHARACTER SET utf8 NOT NULL,
  `lbBG` varchar(100) CHARACTER SET utf8 NOT NULL,
  `pic` varchar(100) CHARACTER SET utf8 NOT NULL,
  `fullinfo` text CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_project`
--

INSERT INTO `tbl_project` (`project_id`, `name`, `id`, `bio`, `lbBG`, `pic`, `fullinfo`) VALUES
(1, 'Mini-Cooper App', 'mini', ' Mini-app is a Project made using VueJS, SASS and Php. User can get details about their favourite Mini-Cooper Car', 'mini-bg.jpg', 'mini-project.jpg', 'The Project is to help students to show info about VueJS and how it get connect to database and live showing database info using PHP. At the end of the project it help me to get great idea about VueJS.'),
(2, 'The Realm', 'agency', 'The realm is the agency based in Canada with the strategies, ideas, creative, and technology to connect with people today.', 'therealm.png\r\n', 'realm-pic.png', 'The realm is group project with 6 people in group. This project is based on making a Marketing agency which helps customers to build and design website and help them to create ads for the business.'),
(3, 'ThermoSecurity', 'thermo', 'HouseComTM ThermoSecurityTM System devices monitor  with their elegant and minimalist design.', 'thermolbBG.jpg', 'thermoSecurity.jpg', 'This project is based on building a website for a ThermoSecurity for home security and controlling house temperature with this and also keep the house protected with the security. ');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
