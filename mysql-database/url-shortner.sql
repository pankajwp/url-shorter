-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for url-shortner
CREATE DATABASE IF NOT EXISTS `url-shortner` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `url-shortner`;

-- Dumping structure for table url-shortner.urls
CREATE TABLE IF NOT EXISTS `urls` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `originalUrl` varchar(250) DEFAULT NULL,
  `mainUrl` varchar(250) DEFAULT NULL,
  `shortUrl` varchar(250) DEFAULT NULL,
  `uniqueCode` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table url-shortner.url_stats
CREATE TABLE IF NOT EXISTS `url_stats` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `urlId` int(10) unsigned DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `ip` varchar(250) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `urlId_idx` (`urlId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
