CREATE DATABASE  IF NOT EXISTS `workout_crud` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `workout_crud`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: workout_crud
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `workout_exercise`
--

DROP TABLE IF EXISTS `workout_exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workout_exercise` (
  `workout_id` int NOT NULL,
  `exercise` varchar(400) NOT NULL,
  `reps` int DEFAULT NULL,
  `sets` int DEFAULT NULL,
  PRIMARY KEY (`workout_id`,`exercise`),
  CONSTRAINT `workout` FOREIGN KEY (`workout_id`) REFERENCES `workout_sheet` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workout_exercise`
--

LOCK TABLES `workout_exercise` WRITE;
/*!40000 ALTER TABLE `workout_exercise` DISABLE KEYS */;
INSERT INTO `workout_exercise` VALUES (2,'Landmine Twist',3,8),(2,'Palms-down wrist curl over bench',10,3),(3,'Palms-down wrist curl over bench',10,3),(3,'Rickshaw Carry',10,3),(4,'Palms-down wrist curl over bench',10,3),(4,'Rickshaw Carry',10,3),(64,'Atlas Stones',10,3),(64,'Incline Hammer Curls',10,3),(64,'Rickshaw Carry',10,3),(64,'Weighted pull-up',10,3),(66,'Atlas Stones',10,3),(66,'Dumbbell V-Sit Cross Jab',10,3),(66,'Landmine twist',10,3),(66,'Palms-down wrist curl over bench',10,3),(66,'Suspended ab fall-out',10,3),(68,'Barbell Deadlift',10,3),(68,'Barbell Full Squat',10,3),(68,'Barbell glute bridge',10,3),(68,'Barbell Hip Thrust',10,3),(68,'Glute ham raise-',10,3),(68,'Single-Leg Press',10,3),(68,'Smith Machine Calf Raise',10,3);
/*!40000 ALTER TABLE `workout_exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workout_sheet`
--

DROP TABLE IF EXISTS `workout_sheet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workout_sheet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `description` varchar(256) NOT NULL DEFAULT '"this is a short description"',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workout_sheet`
--

LOCK TABLES `workout_sheet` WRITE;
/*!40000 ALTER TABLE `workout_sheet` DISABLE KEYS */;
INSERT INTO `workout_sheet` VALUES (2,'Workout 2','this is a short description'),(3,'Push Workout','Chest, Shoulders and Triceps'),(4,'Pull Workout','Back and Biceps'),(64,'test','test'),(66,'Workout 3','Edited'),(68,'Leg Workout','Quads, Hamstrings, Glutes and Calves');
/*!40000 ALTER TABLE `workout_sheet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `workout_with_exercises`
--

DROP TABLE IF EXISTS `workout_with_exercises`;
/*!50001 DROP VIEW IF EXISTS `workout_with_exercises`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `workout_with_exercises` AS SELECT 
 1 AS `id`,
 1 AS `name`,
 1 AS `exercise`,
 1 AS `reps`,
 1 AS `sets`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `workout_with_exercises`
--

/*!50001 DROP VIEW IF EXISTS `workout_with_exercises`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `workout_with_exercises` AS select `s`.`id` AS `id`,`s`.`name` AS `name`,`workout_exercise`.`exercise` AS `exercise`,`workout_exercise`.`reps` AS `reps`,`workout_exercise`.`sets` AS `sets` from (`workout_sheet` `s` join `workout_exercise` on((`workout_exercise`.`workout_id` = `s`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-09 13:47:34
