USE goodbikesdb;

-- <Para validar LOGIN y recuperar datos para session y cookies>
	 -- SELECT id, first_name, email, password, avatar from USERS WHERE USERS.still_alive = 'YES';

-- <Para PROFILE>
	-- <QUERY 1>
    -- SELECT USERS.id, USERS.first_name, USERS.email, USERS.password, USERS.avatar, 
    -- ADDRESSES.street, ADDRESSES.street_number, ADDRESSES.street_state, ADDRESSES.street_locality, ADDRESSES.street_apartment, ADDRESSES.street_postal_code,
    -- PAYMENTS_METHODS.alias, PAYMENTS_METHODS.brand_card, PAYMENTS_METHODS.number_card, PAYMENTS_METHODS.bank
    -- from USERS 
    -- LEFT JOIN ADDRESSES ON USERS.id = ADDRESSES.user_id_fk
    -- LEFT JOIN PAYMENTS_METHODS ON USERS.id = PAYMENTS_METHODS.user_id_fk;

	-- <QUERY 2>
	-- SELECT USERS.id, USERS.first_name, PRODUCTS.Title, PRODUCTS.price, PRODUCTS_IMAGES.image_name FROM PRODUCTS
	-- INNER JOIN PRODUCTS_IMAGES ON PRODUCTS.id = PRODUCTS_IMAGES.product_id_fk
	-- INNER JOIN PURCHASES_DETAILS ON PRODUCTS.id = PURCHASES_DETAILS.product_id_fk
	-- INNER JOIN USERS ON PURCHASES_DETAILS.user_id_fk = USERS.id
	-- WHERE PRODUCTS_IMAGES.principal_image = 'YES';
   

-- <Productos para el home>
	-- Select PRODUCTS.id, PRODUCTS.category, PRODUCTS.title, PRODUCTS.brand, PRODUCTS.model, PRODUCTS.detail, PRODUCTS.price, PRODUCTS_IMAGES.image_name, PRODUCTS_IMAGES.principal_image from PRODUCTS LEFT JOIN PRODUCTS_IMAGES ON PRODUCTS.id = PRODUCTS_IMAGES.product_id_fk 
    -- WHERE PRODUCTS_IMAGES.principal_image = 'YES' and PRODUCTS.still_alive = 'YES'   ORDER BY PRODUCTS.id ;    
  
    
-- <PRODUCT SEARCH categorias en el home>    
		-- Select id, category, title, brand, model, detail, price from products 
        -- WHERE category = 'Rodados' and PRODUCTS.still_alive = 'YES';


-- <Productos para product_detail>
	-- Select PRODUCTS.id, PRODUCTS.category, PRODUCTS.title, PRODUCTS.brand, PRODUCTS.model, PRODUCTS.detail, PRODUCTS.price, PRODUCTS_IMAGES.image_name, PRODUCTS_IMAGES.principal_image from PRODUCTS LEFT JOIN PRODUCTS_IMAGES ON PRODUCTS.id = PRODUCTS_IMAGES.product_id_fk WHERE PRODUCTS.id = 16 ;
   

-- <Creación de usuario en register>
	-- INSERT INTO Users(first_name,last_name,email,password,avatar)
	-- VALUES ('Bruno','Diaz','Batman@gmail.com','$2a$12$1KfWvfIf8X4EugwY2pFyC.LEodu/c3y.I5wyiESTbzhV7k3dqwgHG', 'batman@gotica.com-1610312169591.PNG');

