DROP DATABASE if exists GoodbikesDB;
CREATE database if not exists GoodbikesDB;

USE GoodbikesDB;

DROP TABLE if exists  Products ;
CREATE TABLE Products
	(Product_Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Category varchar(12) NOT NULL,
    Title varchar(255) NOT NULL,
    Brand varchar(30) NOT NULL,
    Model varchar(30) NOT NULL,
    Detail varchar(3500)				default null,			
    Price decimal(10,2)	NOT NULL	default 0,
    quantity int NOT NULL			default(0),
    offert varchar(3) 				default 'NO',
    has_price varchar(3)			default 'YES',
    discount decimal(3,2) 			default(0),
    still_alive varchar(3) not null		default 'YES'
    );

DROP TABLE if exists  Products_Images ;
CREATE TABLE Products_Images(
Product_Id_FK INT NOT NULL,
Image_Name VARCHAR(255) NOT NULL,
Id_register_IMG INT AUTO_INCREMENT PRIMARY KEY, 
FOREIGN KEY (Product_Id_FK) REFERENCES Products(Product_Id)
);


INSERT INTO GoodbikesDB.Products(Category,Title,Brand,Model,Detail,Price,quantity) 
VALUES 
('Rodados','Mountain Bike Firebird R29 Doble suspension','Firebird','R29 Doble suspension','Genero: Unisex, Material del cuadro: Acero, Numero de cambios: 21, Tipo de freno: Disco mecanico, Suspension: Doble, Rodado: 29, Modelo: DobSusRodado29, Tipo: Mountain Bike, Manubrio: Acero, Pedal: Plastico, Peso: 15 k',71999,50),
('Rodados','Todoterreno Aurora Bacota','Aurora','Bacota','Genero: Unisex, Material del cuadro: Aluminio, Numero de cambios: 7, Tipo de freno: Disco mecanico Shimano, Suspension: Doble, Rodado: Especial 26x4, Modelo: Bacota, Tipo: Mountain Bike, Manubrio: Chopero Acer',98000,30),
('Rodados','Mountain Kike Teknial Tarpan 100er','Teknial','Tarpan 100er','Genero: Hombre, Material del cuadro: Aluminio, Numero de cambios: 21, Tipo de freno: Disco mecanico Shimano, Suspension: Simple, Rodado: 29, Modelo: Tarpan, Tipo: Mountain Bike, Manubrio: Acero MTB, Pedal: Plasticos',52000,50),
('Rodados','Electrica plegable Ride Daily 250W 13AH','Ride Daily','ID V','Genero: Unisex, Material del cuadro: Aluminio, Numero de cambios: 6, Tipo de freno: Disco mecanico, Suspension: Delantera, Rodado: 20, Modelo: ID V, Tipo: Electrica, Manubrio: Aluminio, Pedal: Plastico, Peso: 15 kg',248800,20),
('Rodados','Playera Randers BKE-001','RANDERS','BKE-001','Genero: Unisex, Material del cuadro: Acero, Numero de cambios: Sin cambios, Tipo de freno: Contrapedal, Suspension: Sin suspension, Rodado: 26, Modelo: BKE-001-B, Tipo: Urbana, Manubrio: Acero, Pedal: Plastico, Peso: 1',28000,50),
('Indumentaria','Remera Térmica','Columbia','OmniHeat','Tecnología Térmica Por Reflexión - Tejido Elástico En 4 Direcciones - Tratamiento Antimicrobiano Que Previene La Proliferación Bacteriana - Costuras Ergonómicas - Costuras Planas',3500,10),
('Rodados','Rodados infantil Princesa','Aurorita','Princesa','Rodados Aurorita Princesa, Rodado 12. Con rueditas, ideal para comenzar.',32000,15),
('Indumentaria','Zapatillas Ciclismo Mtb','Torbal','Me300','Zapatilla ciclismo talle 42, resistente y flexible',16900,25),
('Accesorios','Rodillo entrenamiento ','Shimao','Rodi200','- Resistencia ajustable en 7 posiciones - Regulable Remotamente - Bastidor con sólidas patas traseras - Fácil montaje del sistema de frenado - Freno magnético y turbina - Diseño compacto y plegable - Muy fácil de instalar y usar. - Compatible con las ruedas: 700, 26, 27.5 y 29 - Incluye un sistema de presión rápida',17020,3),
('Rodados','Ebike Trimove 1000w','Trimove','1000w R','Modelo: 1000 R Chasis: Monocasco en acero Potencia: 1000 watt Motor: Trimove PWT, sin escobillas, C.C. Batería: 625Wh (48v 13) Li-Ion SAMSUNG Frenos: Shimano Hidráulico, Disco 160mm, caliper 2 pist. Suspensión delantera: Horquilla Telescópica doble cristo, regulable Magnesio y Alum., eje Hueco 20mm Suspensión trasera: Monoshock hidráulico Regulable en compresión y rebote Electrónica: Controlador Programable Trimove Modo conducción: Acelerador de puño - Pedaleo Velocidad máxima: 53 km/h Autonomía @ 30km/h sobre superf. plana: +45 km Rueda delantera: 26” - Aro Aluminio doble pared Rueda trasera: 26” - Aro Aluminio doble pared Intrumental: Display Color Peso: 29,7 Kg',300000,2),
('Equipamiento','Casco Bicileta Bontrager','Bontrager','CIRCUIT','Más protección * Revestimiento interior MIPS que mejora la protección de los impactos rotacionales. * Mayor cobertura en la parte trasera del casco para una protección adicional. * Adhesivos reflectantes de contraste en la parte posterior del casco que aumentan la visibilidad nocturna.',13500,10),
('Indumentaria','Calza Mujer','Nike','CalBi','HERMOSAS CALZAS REALIZADAS EN LYCRA PREMIUM REFORZADAS DE EXCELENTE CALCE, CON DOBLE COSTURAS, SUAVES Y NO SE HACEN PELOTITAS!!! CALCE PERFECTO',2500,5),
('Rodados','BICICLETA MONTY 209','MONTY','209 KAIZEN','La bicicleta infantil Monty 209 Kaizen es el nuevo modelo de referencia Monty para los más pequeños! Cuenta con unos componentes y geometrías 100% escogidos para facilitar el pilotaje a todos los riders de hasta 140cm de estatura: ideal para dar los primeros pasos en el trial en bicicleta!',32500,3),
('Indumentaria','Campera Ciclista DryFit','Santini','DryCamp','Protección térmica: construcción transpirable y cálida Thermofl Eece. Perfecto para paseos a mitad de temporada Ajuste cómodo: diseñado para sentarse cómodamente en el cuerpo sin restricciones. Puños de doble manga para mayor calidez Alta visibilidad: detalles reflectantes de la chaqueta trasera para una alta visibilidad en la oscuridad',13500,15),
('Rodados','Rodados Mountain Bike Rod 29 Teknial Tarpan','Teknial','Tarpan 100er','Rodados Mountain Bike Rod 29 Teknial Tarpan 100er Shimano -29? ALUMINIO 6061 MTB -Horquilla TEKNIAL MD-711G -Cambio Shimano Tourney -Frenos de disco mecánico',64900,3),
('Rodados','Bicicleta Harrier','Harrier','Wind','ASIENTO Antiprostático 280X135 mm CUBIERTA	Arisun Clincher 700X23C Vitesse DESVIADOR	Shimano Claris M2403 CUADRO		Harrier Aluminio Ruta con Horquilla Talle 52/54/56 ENGRANAJE	Shimano Claris R-2000 C/Cartucho CAJA PEDALERA	Central 34.7 DER/IZQ OCTALINK 68X113 CAMBIOS		Index 16 Velocidades Shimano Claris RD-2000 MANIJA		Shimano Claris 2000 FRENO		Herradura Shimano Claris BR-R2000 MAZA TRASERA	SHIMANO Claris 2400 32AG PIÑÓN		8C 11-28T Cassette Shimano HG50 VELOCIDADES	16',132199,5),
('Rodados','Flamingo Negro Celeste','Flamingo','Negro Celeste','RODADO 29 FRENOS		Disco mecánico TOPMEGA HORQUILLA	Con suspensión PIÑON		7 Coronas Index 14-28T ENGRANAJE	Triple 24-34-42X170 Index c/cubre CAMBIOS		Shimano Tourney DESVIADOR	Shimano Tourney TZ510 CUADRO		Aluminio MAZA DELANTERA	36 Agujero Aluminio a rulemán con cierre VELOCIDADES	21 CAMBIOS 	Shimano Tourney MAZA TRASERA	Cassette Aluminio a rulemán con cierre CAJA PEDALERA	34.7mm Blindado C/Ruleman CUBIERTA	Arisun Graham 29X2.20 MTB LLANTA		Doble Pared ASIENTO		MTB 265X150 mm ',66999,10),
('Equipamiento','Casco 26 ventilaciones','Next','26 ventilaciones','Casco ligero y con forma aerodinámica para darte seguridad, sin quitarte velocidad',5899,3),
('Equipamiento','Casco infantil tigre','Next','Tigre','Casco ligero y con forma aerodinámica para darte seguridad, sin quitarte velocidad',6319,2),
('Equipamiento','Casco infantil cebra','Next','Cebra','Casco ligero y con forma aerodinámica para darte seguridad, sin quitarte velocidad',6319,5),
('Indumentaria','Zapatilla MTB abrojo','MTB','Abrojo','Zapatilla  MTP Top - Ajuste con abrojo',10099,8),
('Indumentaria','Zapatilla MTB criquet','MTB','Criquet','Zapatilla  MTP Top - Ajuste con criquet',12399,12),
('Accesorios','Botella térmica','Stanley','500ml','Material	Acero Inoxidable Capacidad	500ml',3199,15),('Accesorios','Luz usb','Noganet','usb delantera','Funciones 2 Cantidad de Led	4 Lumens 30 Alimentación Batería recargable 3,7V 300 MAH',1899,3),
('Taller','Grasa PRO','Zefal','PRO','Pomo 150ML',1899,5),
('Accesorios','Inflador pico','Shimao','Pico push','Inflador Pico CO2 Push 3899 Material Aluminio con cubierta termoplastica Longitud	45 mm / 1.8 Racor Z-Push Peso 24g. (Sin cartucho) Cartuchos	12g. - 16g. - 25g. con rosca',1899,15),
('Accesorios','Rollo entrenador','Shimao','Rodi200','Medidas	Plegado 71,5 cm, desplegado 137,5 cm Materiales	Aluminio de aviación, Plástico de alto impacto Rodados compatibles	26 al 29 Peso	6,8 Kg',26999,2),
('Accesorios','Sensor de cadencia','Shimao','cad25','Batería CR2032 Voltaje	3V Función	Seguimiento de velocidad y cadencia Método de enlace	Bluetooth 4.0 ANT + Compatible Reloj Deportivo ANT+	Si - Garmin, TomTom. Compatible Computadora para bicicleta ANT+	Si - Garmin WahooBryton Compatible	Zwift, Tacx, BKOOL',4199,0),
('Taller','Servicio de taller','Taller','Reparación Express','En GoodBikes contamos con taller propio de reparación, armado, pintura,  mantenimiento y servicio mecánico de bicicletas. Nuestro equipo cuenta con una amplia trayectoria en el armado de bicicletas, reparación y mantenimiento de las mismas. Contamos además con instrumental adecuado para abordar distintos tipos de trabajos de mantenimiento.',0,0),
('Taller','Taller 2','Marca','Modelo','asdfasfasdf',234123,0);    

INSERT INTO GoodbikesDB.Products_Images(Product_Id_FK,Image_Name) 
VALUES 
(1,'Mountain Bike Firebird R29 Doble suspension-1607637586447.jpeg'),
(2,'Todoterreno Aurora Bacota-1607637655880.jpg'),
(3,'Mountain Kike Teknial Tarpan 100er-1607637771211.png'),
(4,'Electrica plegable Ride Daily 250W 13AH-1607655724523.jpeg'),
(5,'Playera Randers BKE-001-1607655932537.jpg'),
(6,'Remera Térmica-1607656205405.jpg'),
(7,'Bicicleta-infantil-Princesa-1607656341856.jpg'),
(8,'Zapatillas Ciclismo Mtb-1607656530693.jpg'),
(9,'Rodillo entrenamiento -1607656613014.jpg'),
(10,'Ebike Trimove 1000w-1607656730235.jpeg'),
(11,'Casco Bicileta Bontrager-1607656816490.jpg'),
(12,'Calza Mujer-1607656942322-2.jpg'),
(13,'BICICLETA MONTY 209-1607657296951.PNG'),
(14,'Campera Ciclista DryFit-1607657479976.png'),
(15,'Rodados Mountain Bike Rod 29 Teknial Tarpan-1607657566041.PNG'),
(16,'Bicicleta-Harrier-1609009037661.jpg'),
(16,'Bicicleta-Harrier-1609009037668.jpg'),
(16,'Bicicleta-Harrier-1609009037670.jpg'),
(17,'Flamingo Negro Celeste-1609041160150.jpg'),
(17,'Flamingo Negro Celeste-1609041160155.jpg'),
(17,'Flamingo Negro Celeste-1609041160158.jpg'),
(17,'Flamingo Negro Celeste-1609041160167.jpg'),
(18,'Casco 26 ventilaciones-1609041325358.jpg'),
(18,'Casco 26 ventilaciones-1609041325362.jpg'),
(19,'Casco infantil tigre-1609041378975.jpg'),
(19,'Casco infantil tigre-1609041378976.jpg'),
(19,'Casco infantil tigre-1609041378980.jpg'),
(19,'Casco infantil tigre-1609041378989.jpg'),
(20,'Casco infantil cebra-1609041500416.jpg'),
(20,'Casco infantil cebra-1609041500413.jpg'),
(20,'Casco infantil cebra-1609041500411.jpg'),
(21,'Zapatilla MTB abrojo-1609041562093.jpg'),
(21,'Zapatilla MTB abrojo-1609041562094.jpg'),
(22,'Zapatilla MTB criquet-1609041603144.jpg'),
(22,'Zapatilla MTB criquet-1609041603146.jpg'),
(23,'Botella térmica-1609041682094.jpg'),
(23,'Botella térmica-1609041682097.jpg'),
(23,'Botella térmica-1609041682098.jpg'),
(23,'Botella térmica-1609041682104.jpg'),
(24,'Luz usb-1609041724686.jpg'),
(24,'Luz usb-1609041724683.jpg'),
(24,'Luz usb-1609041724682.jpg'),
(25,'Grasa PRO-1609041765644.jpg'),
(26,'Inflador pico-1609041819859.jpg'),
(27,'Rollo entrenador-1609041964201.jpg'),
(27,'Rollo entrenador-1609041964203.jpg'),
(27,'Rollo entrenador-1609041964206.jpg'),
(28,'Sensor de cadencia-1609042686246.jpg'),
(28,'Sensor de cadencia-1609042686258.jpg'),
(28,'Sensor de cadencia-1609042686260.png'),
(29,'Servicio de taller-1609871673599.jpg'),
(30,'Taller 2-1609878736364.jpg');

SELECT Products.Product_Id ,Products.Title, products_images.Image_Name from products
LEFT JOIN products_Images ON Products.Product_Id = products_images.Product_Id_FK;

    
