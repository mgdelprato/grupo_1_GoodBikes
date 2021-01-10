USE goodbikesdb;

-- <Para validar LOGIN y recuperar datos para session y cookies>
	-- SELECT id, first_name, email, password, avatar from USERS;

-- <Productos para el home>
	Select PRODUCTS.id, PRODUCTS.category, PRODUCTS.title, PRODUCTS.brand, PRODUCTS.model, PRODUCTS.detail, PRODUCTS.price, PRODUCTS_IMAGES.image_name 
    from PRODUCTS LEFT JOIN PRODUCTS_IMAGES ON PRODUCTS.id = PRODUCTS_IMAGES.product_id_fk ORDER BY PRODUCTS.id;
    
-- <PRODUCT SEARCH categorias en el home>    
		-- Select id, category, title, brand, model, detail, price from products WHERE category = 'Rodados';

-- <Creación de usuario en register>
	-- INSERT INTO Users(first_name,last_name,email,password,avatar)
	-- VALUES ('Bruno','Diaz','Batman@gmail.com','$2a$12$1KfWvfIf8X4EugwY2pFyC.LEodu/c3y.I5wyiESTbzhV7k3dqwgHG', 'batman@gotica.com-1610312169591.PNG');

