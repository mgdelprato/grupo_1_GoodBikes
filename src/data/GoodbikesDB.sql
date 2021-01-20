CREATE DATABASE  IF NOT EXISTS `goodbikesdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `goodbikesdb`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: goodbikesdb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `user_id_fk` int(11) NOT NULL,
  `street` varchar(50) DEFAULT NULL,
  `street_number` varchar(6) DEFAULT NULL,
  `street_state` varchar(30) DEFAULT NULL,
  `street_locality` varchar(30) DEFAULT NULL,
  `street_apartment` varchar(30) DEFAULT NULL,
  `street_postal_code` varchar(7) DEFAULT NULL,
  `still_alive` varchar(3) NOT NULL DEFAULT 'YES',
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_fk` (`user_id_fk`),
  CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`user_id_fk`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Calle Falsa','123','Unknwown','Springfield',NULL,NULL,'YES',1,'2021-01-20 02:50:59',NULL,NULL),(2,'Waverley St','2510','California','Palo Alto','2 E','94301','YES',2,'2021-01-20 02:50:59',NULL,NULL),(3,'Rivadavia','11000','CABA','Liniers','8 A','1408','YES',3,'2021-01-20 02:50:59',NULL,NULL),(4,'Arieta','2947','Pcia Bs As','San Justo',NULL,'1754','YES',4,'2021-01-20 02:50:59',NULL,NULL),(5,'Balcarce','60','CABA','San Nicol├ís','PB','4178','YES',5,'2021-01-20 02:50:59',NULL,NULL),(6,'Carabobo','3250','CABA','Flores','4 A','1406','YES',6,'2021-01-20 02:50:59',NULL,NULL),(7,'Bme Mitre','434','CABA','San Nicol├ís','PB','4178','YES',7,'2021-01-20 02:50:59',NULL,NULL),(8,'Juan B Justo','1320','CABA','Palermo',NULL,'1414','YES',8,'2021-01-20 02:50:59',NULL,NULL);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments_methods`
--

DROP TABLE IF EXISTS `payments_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payments_methods` (
  `user_id_fk` int(11) NOT NULL,
  `alias` varchar(30) NOT NULL DEFAULT 'My Payment',
  `brand_card` varchar(30) NOT NULL,
  `number_card` varchar(16) NOT NULL,
  `bank` varchar(30) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `still_alive` varchar(3) NOT NULL DEFAULT 'YES',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_fk` (`user_id_fk`),
  CONSTRAINT `payments_methods_ibfk_1` FOREIGN KEY (`user_id_fk`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments_methods`
--

LOCK TABLES `payments_methods` WRITE;
/*!40000 ALTER TABLE `payments_methods` DISABLE KEYS */;
INSERT INTO `payments_methods` VALUES (1,'La del Galicia','VISA','5555111122223333','Banco Galicia',1,'YES','2021-01-20 02:50:59',NULL,NULL),(2,'Guita del exterior','AMEX','3333111122223334','BanK of America',2,'YES','2021-01-20 02:50:59',NULL,NULL),(3,'Tarjeta','Mastercard','4444111122223335','Shangai Bank',3,'YES','2021-01-20 02:50:59',NULL,NULL),(4,'Adicional de la nona','Mastercard','5555111122223336','Banco Columbia',4,'YES','2021-01-20 02:50:59',NULL,NULL),(5,'Santander','VISA','5555111122223337','Banco Santander R├¡o',5,'YES','2021-01-20 02:50:59',NULL,NULL),(6,'Tarjeta Oriental','VISA','5555111122223338','Banco Nacional del Uruguay',6,'YES','2021-01-20 02:50:59',NULL,NULL),(7,'Adicional del nono','Mastercard','5555111122223339','Banca Nazionale del Lavoro',7,'YES','2021-01-20 02:50:59',NULL,NULL),(8,'Guita en Emiratos','AMEX','5555111122223310','Emirates NBD',8,'YES','2021-01-20 02:50:59',NULL,NULL);
/*!40000 ALTER TABLE `payments_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(12) NOT NULL,
  `title` varchar(255) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `model` varchar(30) NOT NULL,
  `detail` varchar(3500) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `offert` varchar(3) DEFAULT 'NO',
  `has_price` varchar(3) DEFAULT 'YES',
  `discount` decimal(3,2) DEFAULT 0.00,
  `still_alive` varchar(3) NOT NULL DEFAULT 'YES',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `img_ppal` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Rodados','Mountain Bike Firebird R29 Doble suspension','Firebird','R29 Doble suspension','Genero: Unisex, Material del cuadro: Acero, Numero de cambios: 21, Tipo de freno: Disco mecanico, Suspension: Doble, Rodado: 29, Modelo: DobSusRodado29, Tipo: Mountain Bike, Manubrio: Acero, Pedal: Plastico, Peso: 15 k',71999.00,50,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(2,'Rodados','Todoterreno Aurora Bacota','Aurora','Bacota','Genero: Unisex, Material del cuadro: Aluminio, Numero de cambios: 7, Tipo de freno: Disco mecanico Shimano, Suspension: Doble, Rodado: Especial 26x4, Modelo: Bacota, Tipo: Mountain Bike, Manubrio: Chopero Acer',98000.00,30,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(3,'Rodados','Mountain Kike Teknial Tarpan 100er','Teknial','Tarpan 100er','Genero: Hombre, Material del cuadro: Aluminio, Numero de cambios: 21, Tipo de freno: Disco mecanico Shimano, Suspension: Simple, Rodado: 29, Modelo: Tarpan, Tipo: Mountain Bike, Manubrio: Acero MTB, Pedal: Plasticos',52000.00,50,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(4,'Rodados','Electrica plegable Ride Daily 250W 13AH','Ride Daily','ID V','Genero: Unisex, Material del cuadro: Aluminio, Numero de cambios: 6, Tipo de freno: Disco mecanico, Suspension: Delantera, Rodado: 20, Modelo: ID V, Tipo: Electrica, Manubrio: Aluminio, Pedal: Plastico, Peso: 15 kg',248800.00,20,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(5,'Rodados','Playera Randers BKE-001','RANDERS','BKE-001','Genero: Unisex, Material del cuadro: Acero, Numero de cambios: Sin cambios, Tipo de freno: Contrapedal, Suspension: Sin suspension, Rodado: 26, Modelo: BKE-001-B, Tipo: Urbana, Manubrio: Acero, Pedal: Plastico, Peso: 1',28000.00,50,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(6,'Indumentaria','Remera T├®rmica','Columbia','OmniHeat','Tecnolog├¡a T├®rmica Por Reflexi├│n - Tejido El├ístico En 4 Direcciones - Tratamiento Antimicrobiano Que Previene La Proliferaci├│n Bacteriana - Costuras Ergon├│micas - Costuras Planas',3500.00,10,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(7,'Rodados','Rodados infantil Princesa','Aurorita','Princesa','Rodados Aurorita Princesa, Rodado 12. Con rueditas, ideal para comenzar.',32000.00,15,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(8,'Indumentaria','Zapatillas Ciclismo Mtb','Torbal','Me300','Zapatilla ciclismo talle 42, resistente y flexible',16900.00,25,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(9,'Accesorios','Rodillo entrenamiento ','Shimao','Rodi200','- Resistencia ajustable en 7 posiciones - Regulable Remotamente - Bastidor con s├│lidas patas traseras - F├ícil montaje del sistema de frenado - Freno magn├®tico y turbina - Dise├▒o compacto y plegable - Muy f├ícil de instalar y usar. - Compatible con las ruedas: 700, 26, 27.5 y 29 - Incluye un sistema de presi├│n r├ípida',17020.00,3,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(10,'Rodados','Ebike Trimove 1000w','Trimove','1000w R','Modelo: 1000 R Chasis: Monocasco en acero Potencia: 1000 watt Motor: Trimove PWT, sin escobillas, C.C. Bater├¡a: 625Wh (48v 13) Li-Ion SAMSUNG Frenos: Shimano Hidr├íulico, Disco 160mm, caliper 2 pist. Suspensi├│n delantera: Horquilla Telesc├│pica doble cristo, regulable Magnesio y Alum., eje Hueco 20mm Suspensi├│n trasera: Monoshock hidr├íulico Regulable en compresi├│n y rebote Electr├│nica: Controlador Programable Trimove Modo conducci├│n: Acelerador de pu├▒o - Pedaleo Velocidad m├íxima: 53 km/h Autonom├¡a @ 30km/h sobre superf. plana: +45 km Rueda delantera: 26ÔÇØ - Aro Aluminio doble pared Rueda trasera: 26ÔÇØ - Aro Aluminio doble pared Intrumental: Display Color Peso: 29,7 Kg',300000.00,2,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(11,'Equipamiento','Casco Bicileta Bontrager','Bontrager','CIRCUIT','M├ís protecci├│n * Revestimiento interior MIPS que mejora la protecci├│n de los impactos rotacionales. * Mayor cobertura en la parte trasera del casco para una protecci├│n adicional. * Adhesivos reflectantes de contraste en la parte posterior del casco que aumentan la visibilidad nocturna.',13500.00,10,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(12,'Indumentaria','Calza Mujer','Nike','CalBi','HERMOSAS CALZAS REALIZADAS EN LYCRA PREMIUM REFORZADAS DE EXCELENTE CALCE, CON DOBLE COSTURAS, SUAVES Y NO SE HACEN PELOTITAS!!! CALCE PERFECTO',2500.00,5,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(13,'Rodados','BICICLETA MONTY 209','MONTY','209 KAIZEN','La bicicleta infantil Monty 209 Kaizen es el nuevo modelo de referencia Monty para los m├ís peque├▒os! Cuenta con unos componentes y geometr├¡as 100% escogidos para facilitar el pilotaje a todos los riders de hasta 140cm de estatura: ideal para dar los primeros pasos en el trial en bicicleta!',32500.00,3,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(14,'Indumentaria','Campera Ciclista DryFit','Santini','DryCamp','Protecci├│n t├®rmica: construcci├│n transpirable y c├ílida Thermofl Eece. Perfecto para paseos a mitad de temporada Ajuste c├│modo: dise├▒ado para sentarse c├│modamente en el cuerpo sin restricciones. Pu├▒os de doble manga para mayor calidez Alta visibilidad: detalles reflectantes de la chaqueta trasera para una alta visibilidad en la oscuridad',13500.00,15,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(15,'Rodados','Rodados Mountain Bike Rod 29 Teknial Tarpan','Teknial','Tarpan 100er','Rodados Mountain Bike Rod 29 Teknial Tarpan 100er Shimano -29? ALUMINIO 6061 MTB -Horquilla TEKNIAL MD-711G -Cambio Shimano Tourney -Frenos de disco mec├ínico',64900.00,3,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(16,'Rodados','Bicicleta Harrier','Harrier','Wind','ASIENTO Antiprost├ítico 280X135 mm CUBIERTA	Arisun Clincher 700X23C Vitesse DESVIADOR	Shimano Claris M2403 CUADRO		Harrier Aluminio Ruta con Horquilla Talle 52/54/56 ENGRANAJE	Shimano Claris R-2000 C/Cartucho CAJA PEDALERA	Central 34.7 DER/IZQ OCTALINK 68X113 CAMBIOS		Index 16 Velocidades Shimano Claris RD-2000 MANIJA		Shimano Claris 2000 FRENO		Herradura Shimano Claris BR-R2000 MAZA TRASERA	SHIMANO Claris 2400 32AG PI├æ├ôN		8C 11-28T Cassette Shimano HG50 VELOCIDADES	16',132199.00,5,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(17,'Rodados','Flamingo Negro Celeste','Flamingo','Negro Celeste','RODADO 29 FRENOS		Disco mec├ínico TOPMEGA HORQUILLA	Con suspensi├│n PI├æON		7 Coronas Index 14-28T ENGRANAJE	Triple 24-34-42X170 Index c/cubre CAMBIOS		Shimano Tourney DESVIADOR	Shimano Tourney TZ510 CUADRO		Aluminio MAZA DELANTERA	36 Agujero Aluminio a rulem├ín con cierre VELOCIDADES	21 CAMBIOS 	Shimano Tourney MAZA TRASERA	Cassette Aluminio a rulem├ín con cierre CAJA PEDALERA	34.7mm Blindado C/Ruleman CUBIERTA	Arisun Graham 29X2.20 MTB LLANTA		Doble Pared ASIENTO		MTB 265X150 mm ',66999.00,10,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(18,'Equipamiento','Casco 26 ventilaciones','Next','26 ventilaciones','Casco ligero y con forma aerodin├ímica para darte seguridad, sin quitarte velocidad',5899.00,3,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(19,'Equipamiento','Casco infantil tigre','Next','Tigre','Casco ligero y con forma aerodin├ímica para darte seguridad, sin quitarte velocidad',6319.00,2,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(20,'Equipamiento','Casco infantil cebra','Next','Cebra','Casco ligero y con forma aerodin├ímica para darte seguridad, sin quitarte velocidad',6319.00,5,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(21,'Indumentaria','Zapatilla MTB abrojo','MTB','Abrojo','Zapatilla  MTP Top - Ajuste con abrojo',10099.00,8,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(22,'Indumentaria','Zapatilla MTB criquet','MTB','Criquet','Zapatilla  MTP Top - Ajuste con criquet',12399.00,12,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(23,'Accesorios','Botella t├®rmica','Stanley','500ml','Material	Acero Inoxidable Capacidad	500ml',3199.00,15,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(24,'Accesorios','Luz usb','Noganet','usb delantera','Funciones 2 Cantidad de Led	4 Lumens 30 Alimentaci├│n Bater├¡a recargable 3,7V 300 MAH',1899.00,3,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(25,'Taller','Grasa PRO','Zefal','PRO','Pomo 150ML',1899.00,5,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(26,'Accesorios','Inflador pico','Shimao','Pico push','Inflador Pico CO2 Push 3899 Material Aluminio con cubierta termoplastica Longitud	45 mm / 1.8 Racor Z-Push Peso 24g. (Sin cartucho) Cartuchos	12g. - 16g. - 25g. con rosca',1899.00,15,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(27,'Accesorios','Rollo entrenador','Shimao','Rodi200','Medidas	Plegado 71,5 cm, desplegado 137,5 cm Materiales	Aluminio de aviaci├│n, Pl├ístico de alto impacto Rodados compatibles	26 al 29 Peso	6,8 Kg',26999.00,2,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(28,'Accesorios','Sensor de cadencia','Shimao','cad25','Bater├¡a CR2032 Voltaje	3V Funci├│n	Seguimiento de velocidad y cadencia M├®todo de enlace	Bluetooth 4.0 ANT + Compatible Reloj Deportivo ANT+	Si - Garmin, TomTom. Compatible Computadora para bicicleta ANT+	Si - Garmin WahooBryton Compatible	Zwift, Tacx, BKOOL',4199.00,0,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(29,'Taller','Servicio de taller','Taller','Reparaci├│n Express','En GoodBikes contamos con taller propio de reparaci├│n, armado, pintura,  mantenimiento y servicio mec├ínico de bicicletas. Nuestro equipo cuenta con una amplia trayectoria en el armado de bicicletas, reparaci├│n y mantenimiento de las mismas. Contamos adem├ís con instrumental adecuado para abordar distintos tipos de trabajos de mantenimiento.',0.00,0,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,''),(30,'Taller','Taller 2','Marca','Modelo','asdfasfasdf',234123.00,0,'NO','YES',0.00,'YES','2021-01-20 02:50:59',NULL,NULL,'');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_images`
--

DROP TABLE IF EXISTS `products_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_images` (
  `product_id_fk` int(11) NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id_fk` (`product_id_fk`),
  CONSTRAINT `products_images_ibfk_1` FOREIGN KEY (`product_id_fk`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_images`
--

LOCK TABLES `products_images` WRITE;
/*!40000 ALTER TABLE `products_images` DISABLE KEYS */;
INSERT INTO `products_images` VALUES (1,'Mountain Bike Firebird R29 Doble suspension-1607637586447.jpeg',1,'2021-01-20 02:50:59',NULL,NULL),(2,'Todoterreno Aurora Bacota-1607637655880.jpg',2,'2021-01-20 02:50:59',NULL,NULL),(3,'Mountain Kike Teknial Tarpan 100er-1607637771211.png',3,'2021-01-20 02:50:59',NULL,NULL),(4,'Electrica plegable Ride Daily 250W 13AH-1607655724523.jpeg',4,'2021-01-20 02:50:59',NULL,NULL),(5,'Playera Randers BKE-001-1607655932537.jpg',5,'2021-01-20 02:50:59',NULL,NULL),(6,'Remera T├®rmica-1607656205405.jpg',6,'2021-01-20 02:50:59',NULL,NULL),(7,'Bicicleta-infantil-Princesa-1607656341856.jpg',7,'2021-01-20 02:50:59',NULL,NULL),(8,'Zapatillas Ciclismo Mtb-1607656530693.jpg',8,'2021-01-20 02:50:59',NULL,NULL),(9,'Rodillo entrenamiento -1607656613014.jpg',9,'2021-01-20 02:50:59',NULL,NULL),(10,'Ebike Trimove 1000w-1607656730235.jpeg',10,'2021-01-20 02:50:59',NULL,NULL),(11,'Casco Bicileta Bontrager-1607656816490.jpg',11,'2021-01-20 02:50:59',NULL,NULL),(12,'Calza Mujer-1607656942322-2.jpg',12,'2021-01-20 02:50:59',NULL,NULL),(13,'BICICLETA MONTY 209-1607657296951.PNG',13,'2021-01-20 02:50:59',NULL,NULL),(14,'Campera Ciclista DryFit-1607657479976.png',14,'2021-01-20 02:50:59',NULL,NULL),(15,'Rodados Mountain Bike Rod 29 Teknial Tarpan-1607657566041.PNG',15,'2021-01-20 02:50:59',NULL,NULL),(16,'Bicicleta-Harrier-1609009037661.jpg',16,'2021-01-20 02:50:59',NULL,NULL),(16,'Bicicleta-Harrier-1609009037668.jpg',17,'2021-01-20 02:50:59',NULL,NULL),(16,'Bicicleta-Harrier-1609009037670.jpg',18,'2021-01-20 02:50:59',NULL,NULL),(17,'Flamingo Negro Celeste-1609041160150.jpg',19,'2021-01-20 02:50:59',NULL,NULL),(17,'Flamingo Negro Celeste-1609041160155.jpg',20,'2021-01-20 02:50:59',NULL,NULL),(17,'Flamingo Negro Celeste-1609041160158.jpg',21,'2021-01-20 02:50:59',NULL,NULL),(17,'Flamingo Negro Celeste-1609041160167.jpg',22,'2021-01-20 02:50:59',NULL,NULL),(18,'Casco 26 ventilaciones-1609041325358.jpg',23,'2021-01-20 02:50:59',NULL,NULL),(18,'Casco 26 ventilaciones-1609041325362.jpg',24,'2021-01-20 02:50:59',NULL,NULL),(19,'Casco infantil tigre-1609041378975.jpg',25,'2021-01-20 02:50:59',NULL,NULL),(19,'Casco infantil tigre-1609041378976.jpg',26,'2021-01-20 02:50:59',NULL,NULL),(19,'Casco infantil tigre-1609041378980.jpg',27,'2021-01-20 02:50:59',NULL,NULL),(19,'Casco infantil tigre-1609041378989.jpg',28,'2021-01-20 02:50:59',NULL,NULL),(20,'Casco infantil cebra-1609041500416.jpg',29,'2021-01-20 02:50:59',NULL,NULL),(20,'Casco infantil cebra-1609041500413.jpg',30,'2021-01-20 02:50:59',NULL,NULL),(20,'Casco infantil cebra-1609041500411.jpg',31,'2021-01-20 02:50:59',NULL,NULL),(21,'Zapatilla MTB abrojo-1609041562093.jpg',32,'2021-01-20 02:50:59',NULL,NULL),(21,'Zapatilla MTB abrojo-1609041562094.jpg',33,'2021-01-20 02:50:59',NULL,NULL),(22,'Zapatilla MTB criquet-1609041603144.jpg',34,'2021-01-20 02:50:59',NULL,NULL),(22,'Zapatilla MTB criquet-1609041603146.jpg',35,'2021-01-20 02:50:59',NULL,NULL),(23,'Botella t├®rmica-1609041682094.jpg',36,'2021-01-20 02:50:59',NULL,NULL),(23,'Botella t├®rmica-1609041682097.jpg',37,'2021-01-20 02:50:59',NULL,NULL),(23,'Botella t├®rmica-1609041682098.jpg',38,'2021-01-20 02:50:59',NULL,NULL),(23,'Botella t├®rmica-1609041682104.jpg',39,'2021-01-20 02:50:59',NULL,NULL),(24,'Luz usb-1609041724686.jpg',40,'2021-01-20 02:50:59',NULL,NULL),(24,'Luz usb-1609041724683.jpg',41,'2021-01-20 02:50:59',NULL,NULL),(24,'Luz usb-1609041724682.jpg',42,'2021-01-20 02:50:59',NULL,NULL),(25,'Grasa PRO-1609041765644.jpg',43,'2021-01-20 02:50:59',NULL,NULL),(26,'Inflador pico-1609041819859.jpg',44,'2021-01-20 02:50:59',NULL,NULL),(27,'Rollo entrenador-1609041964201.jpg',45,'2021-01-20 02:50:59',NULL,NULL),(27,'Rollo entrenador-1609041964203.jpg',46,'2021-01-20 02:50:59',NULL,NULL),(27,'Rollo entrenador-1609041964206.jpg',47,'2021-01-20 02:50:59',NULL,NULL),(28,'Sensor de cadencia-1609042686246.jpg',48,'2021-01-20 02:50:59',NULL,NULL),(28,'Sensor de cadencia-1609042686258.jpg',49,'2021-01-20 02:50:59',NULL,NULL),(28,'Sensor de cadencia-1609042686260.png',50,'2021-01-20 02:50:59',NULL,NULL),(29,'Servicio de taller-1609871673599.jpg',51,'2021-01-20 02:50:59',NULL,NULL),(30,'Taller 2-1609878736364.jpg',52,'2021-01-20 02:50:59',NULL,NULL);
/*!40000 ALTER TABLE `products_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchases_details`
--

DROP TABLE IF EXISTS `purchases_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchases_details` (
  `user_id_fk` int(11) NOT NULL,
  `purchase_transaction_id_fk` int(11) NOT NULL,
  `product_id_fk` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `still_alive` varchar(3) NOT NULL DEFAULT 'YES',
  `quantity` int(4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_fk` (`user_id_fk`),
  KEY `purchase_transaction_id_fk` (`purchase_transaction_id_fk`),
  KEY `product_id_fk` (`product_id_fk`),
  CONSTRAINT `purchases_details_ibfk_1` FOREIGN KEY (`user_id_fk`) REFERENCES `users` (`id`),
  CONSTRAINT `purchases_details_ibfk_2` FOREIGN KEY (`purchase_transaction_id_fk`) REFERENCES `purchases_transactions` (`id`),
  CONSTRAINT `purchases_details_ibfk_3` FOREIGN KEY (`product_id_fk`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchases_details`
--

LOCK TABLES `purchases_details` WRITE;
/*!40000 ALTER TABLE `purchases_details` DISABLE KEYS */;
INSERT INTO `purchases_details` VALUES (1,1,25,1,'YES',5,'2021-01-20 02:50:59',NULL,NULL),(1,1,2,2,'YES',3,'2021-01-20 02:50:59',NULL,NULL),(1,1,3,3,'YES',2,'2021-01-20 02:50:59',NULL,NULL),(2,2,7,4,'YES',4,'2021-01-20 02:50:59',NULL,NULL),(2,2,10,5,'YES',5,'2021-01-20 02:50:59',NULL,NULL),(3,3,15,6,'YES',3,'2021-01-20 02:50:59',NULL,NULL),(3,3,22,7,'YES',1,'2021-01-20 02:50:59',NULL,NULL);
/*!40000 ALTER TABLE `purchases_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchases_transactions`
--

DROP TABLE IF EXISTS `purchases_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchases_transactions` (
  `user_id_fk` int(11) NOT NULL,
  `payment_method_id_fk` int(11) NOT NULL,
  `trasaction_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `transaction_amount` decimal(10,2) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `still_alive` varchar(3) NOT NULL DEFAULT 'YES',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_fk` (`user_id_fk`),
  KEY `payment_method_id_fk` (`payment_method_id_fk`),
  CONSTRAINT `purchases_transactions_ibfk_1` FOREIGN KEY (`user_id_fk`) REFERENCES `users` (`id`),
  CONSTRAINT `purchases_transactions_ibfk_2` FOREIGN KEY (`payment_method_id_fk`) REFERENCES `payments_methods` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchases_transactions`
--

LOCK TABLES `purchases_transactions` WRITE;
/*!40000 ALTER TABLE `purchases_transactions` DISABLE KEYS */;
INSERT INTO `purchases_transactions` VALUES (1,1,'2021-01-20 02:50:59',70000.00,1,'YES','2021-01-20 02:50:59',NULL,NULL),(2,2,'2021-01-20 02:50:59',50000.00,2,'YES','2021-01-20 02:50:59',NULL,NULL),(3,3,'2021-01-20 02:50:59',10000.00,3,'YES','2021-01-20 02:50:59',NULL,NULL);
/*!40000 ALTER TABLE `purchases_transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `still_alive` varchar(3) NOT NULL DEFAULT 'YES',
  `is_admin` varchar(3) NOT NULL DEFAULT 'NO',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Damian','Scorciapino','damian_scorciapino@hotmail.com','$2a$12$5N9JbjbPqvXgCNBBGMHX7u0t9xfTSb6dGlq06cROTRLzZl1nAK382','damian_scorciapino@hotmail.com-1607660650203.JPG','YES','NO','2021-01-20 02:50:59',NULL,NULL),(2,'Mauro','Delprato','mgdelprato@gmail.com','$2a$12$gDot0wBdigX/ut4BXfwmd.GkELgsHp.aMrN8ARdEvaSLmYHFkMDUG','mgdelprato@gmail.com-1607660700823.JPG','YES','NO','2021-01-20 02:50:59',NULL,NULL),(3,'Nahuel','Rodriguez','nahuargentina@gmail.com','$2a$12$sE8RnyYXl/NMGue1xIal0.CkIiPjrw/FCg/JZK7FuvZWjkhHw9QtG','nahuargentina@gmail.com-1608501759446.JPG','YES','NO','2021-01-20 02:50:59',NULL,NULL),(4,'Juan Nahuel','Rodriguez Araujo','ecologista_chess@yahoo.com.ar','$2a$12$RHEqXVGD3EDedqB2MCZyvuvNcey.HvunQrUpcU7nH4g72kCJdg4Cy','ecologista_chess@yahoo.com.ar-1608535183320.jpg','YES','NO','2021-01-20 02:50:59',NULL,NULL),(5,'Cosme','Fulanito','cuentaunlam@gmail.com','$2a$12$5Stu2N2HWAIdyqWYS8dPwev6Qwn6/MNSdaqNPrkXWotxJj1Rqgq2O','cuentaunlam@gmail.com-1608698397934.JPG','YES','NO','2021-01-20 02:50:59',NULL,NULL),(6,'Gordo','Motoneta','gordo@gmail.com','$2a$12$OAOZuAHoed3qL44HFJgDXOpwm0leBlO6rCHPJZ/ibFlfn0hROL8hC','gordo@gmail.com-1608756791191.JPG','YES','NO','2021-01-20 02:50:59',NULL,NULL),(7,'El','Barto','barto@gmail.com','$2a$12$Xgw07u97qmaTHMGk5AJydempExrrYw6a632J0i9Gwtz1TdUjtXJeG','barto@gmail.com-1608776726469.JPG','YES','NO','2021-01-20 02:50:59',NULL,NULL),(8,'Felipe','Pino','topo@mail.com','$2a$12$CwauqL003OY/vbMj33pr0..QDo75pffFa7WPUQGPTdC9uX7Q1IFmu','topo@mail.com-1608782890921.JPG','YES','NO','2021-01-20 02:50:59',NULL,NULL),(9,'Oli','Delprato','oli@gmail.com','$2a$12$UP8hzuf3cbmWDP4Ei.z9/e9znyD2wGE666cE1QnH.heHqntI5tLSa','oli@gmail.com-1608809802868.JPG','YES','NO','2021-01-20 02:50:59',NULL,NULL),(10,'Flor','gomez','flor@gmail.com','$2a$12$wKUxnP/g/RV/0CqnStfAKu0i.0SRkFWxJ6.Vr7XgUHw3CFwW/amue','flor@gmail.com-1608810847256.JPG','YES','NO','2021-01-20 02:50:59',NULL,NULL),(11,'Admin','Superusuario','admin@gmail.com','$2a$12$UKMTgyNBwMBgKxw22XcFD.PhlGt12PUssqULTkPG0AjtDYIRV4HR2','admin@gmail.com-1608953906619.JPG','YES','YES','2021-01-20 02:50:59',NULL,NULL),(12,'Mauro','Delprato','mgdelprato@gmail.com','$2a$12$jOwCYeAdNxFr0HIHN0K91eDs8/rlS7xxRiXmqAAa78i4XMguf2lgq','mgdelprato@gmail.com-1609266037402.jpg','YES','NO','2021-01-20 02:50:59',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'goodbikesdb'
--

--
-- Dumping routines for database 'goodbikesdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-20  0:13:34
