USE goodbikesdb;

-- <Trae datos para validar LOGIN y recuperar datos para session y cookies>
	 SELECT id, first_name, email, password, avatar, is_admin 
     from USERS 
     WHERE USERS.still_alive = 'YES';

-- <RECUPERAR DATOS PARA PROFILE>
	-- <QUERY 1 Muestra todos los datos del usuario>
    SELECT USERS.id, USERS.first_name, USERS.last_name, USERS.email, USERS.password, USERS.avatar, 
    ADDRESSES.street, ADDRESSES.street_number, ADDRESSES.street_state, ADDRESSES.street_locality, ADDRESSES.street_apartment, ADDRESSES.street_postal_code,
    PAYMENTS_METHODS.alias, PAYMENTS_METHODS.brand_card, PAYMENTS_METHODS.number_card, PAYMENTS_METHODS.bank
    from USERS 
    LEFT JOIN ADDRESSES ON USERS.id = ADDRESSES.user_id_fk
    LEFT JOIN PAYMENTS_METHODS ON USERS.id = PAYMENTS_METHODS.user_id_fk
    WHERE USERS.id = 3;

	-- <QUERY 2 Muestra compras>
	SELECT USERS.id, USERS.first_name, PRODUCTS.Title, PRODUCTS.price, PRODUCTS_IMAGES.image_name 
    FROM PRODUCTS
	INNER JOIN PRODUCTS_IMAGES ON PRODUCTS.id = PRODUCTS_IMAGES.product_id_fk
	INNER JOIN PURCHASES_DETAILS ON PRODUCTS.id = PURCHASES_DETAILS.product_id_fk
	INNER JOIN USERS ON PURCHASES_DETAILS.user_id_fk = USERS.id
	WHERE PRODUCTS_IMAGES.principal_image = 'YES';
   

-- <RECUPERAR Productos para el home>
	Select PRODUCTS.id, PRODUCTS.category, PRODUCTS.title, PRODUCTS.brand, PRODUCTS.model, PRODUCTS.detail, PRODUCTS.price, PRODUCTS_IMAGES.image_name, PRODUCTS_IMAGES.principal_image 
    from PRODUCTS 
    LEFT JOIN PRODUCTS_IMAGES ON PRODUCTS.id = PRODUCTS_IMAGES.product_id_fk 
    WHERE PRODUCTS_IMAGES.principal_image = 'YES' and PRODUCTS.still_alive = 'YES'   
    ORDER BY PRODUCTS.id ;    
  
    
-- <RECUPERAR categorias en el home PRODUCTSEARCH >    
		Select id, category, title, brand, model, detail, price 
        from PRODUCTS
        WHERE category = 'Rodados' and PRODUCTS.still_alive = 'YES';


-- <RECUPERAR Productos para product_detail>
	Select PRODUCTS.id, PRODUCTS.category, PRODUCTS.title, PRODUCTS.brand, PRODUCTS.model, PRODUCTS.detail, PRODUCTS.price, PRODUCTS_IMAGES.image_name, PRODUCTS_IMAGES.principal_image 
    from PRODUCTS 
    LEFT JOIN PRODUCTS_IMAGES ON PRODUCTS.id = PRODUCTS_IMAGES.product_id_fk 
    WHERE PRODUCTS.id = 16 ;
   

-- <Creación de usuario en register>
	INSERT INTO Users(first_name,last_name,email,password,avatar)
	VALUES ('Bruno','Diaz','Batman@gmail.com','$2a$12$1KfWvfIf8X4EugwY2pFyC.LEodu/c3y.I5wyiESTbzhV7k3dqwgHG', 'batman@gotica.com-1610312169591.PNG');

-- <Creación de Producto>
	INSERT INTO Users(first_name,last_name,email,password,avatar)
	VALUES ('Bruno','Diaz','Batman@gmail.com','$2a$12$1KfWvfIf8X4EugwY2pFyC.LEodu/c3y.I5wyiESTbzhV7k3dqwgHG', 'batman@gotica.com-1610312169591.PNG');


-- <EDITAR PROFILE>
	-- <QUERY 1 editando datos de usuario>
    
    UPDATE USERS 
	SET first_name = 'Capitan', last_name = 'Buscapina', email = 'capitanbuscapina@patriciorey.com.ar',
    password = 'Algo_re_hasheado', avatar=''
    WHERE USERS.ID = 3;
    
	-- <QUERY 2 editando Direcciones>
    
    UPDATE ADDRESSES
	SET street = 'Calle', street_number = '1234', street_state = 'Una Provincia',
    street_locality = 'Una localidad', street_apartment = 'dpto/casa/lote', street_postal_code = 'Un CP'
    WHERE user_id_fk = 3;
    
 	-- <QUERY 3 Medios de pago>
    
    UPDATE PAYMENTS_METHODS
	SET alias = 'La tarjeta de la abuela', brand_card = 'AMEX', number_card = '4444333322220009',
	bank = 'Abu Dabbhi International Bank'
    WHERE user_id_fk = 3;
    
    -- <QUERY 4 - BORRADO LOGICO DE USUARIO >
    UPDATE USERS 
	SET still_alive = 'NO'
    WHERE USERS.id= 3;

    -- <QUERY 5 - BORRADO LOGICO DE 1 METODO DE PAGO >       
    UPDATE PAYMENTS_METHODS 
	SET still_alive = 'NO'
    WHERE USERS.id= 3 and number_card = '4444333322220009';
    
	-- <QUERY 6 - BORRADO LOGICO DE 1 DIRECCION >
    UPDATE PAYMENTS_METHODS 
	SET still_alive = 'NO'
    WHERE USERS.id= 3;


-- <EDITAR PRODUCTOS>
	-- <QUERY 1 editando datos de usuario>
    
    UPDATE USERS 
	SET first_name = 'Capitan', last_name = 'Buscapina', email = 'capitanbuscapina@patriciorey.com.ar',
    password = 'Algo_re_hasheado' 
    WHERE USERS.ID = 3;
    
