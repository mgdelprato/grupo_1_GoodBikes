module.exports = function(sequelize, dataTypes) {​​​​
    let alias = "ProductImage";
    let cols = {​​​​
        id: {​​​​
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }​​​​,
        product_id_fk: {​​​​
            type: dataTypes.INTEGER,
            notNull: true
        }​​​​,
        image_name: {​​​​
            type: dataTypes.STRING,
            notNull: true
        },​​​​
        principal_image: {​​​​
            type: dataTypes.STRING,
            notNull: true,
            defaultValue:'NO'
        }​​​​
    }​​​​;
    let config = {​​​​
        tableName: 'PRODUCTS_IMAGES',
        timestamps: true,
        underscored: true
    } ​
    ​​​const ProductImage = sequelize.define(alias, cols, config)
    
    ProductImage.associate = function(models){
        ProductImage.belongsTo(models.Product,{
                as:"product",
                foreinKey:"product_id_fk"
        });

}
    return ProductImage

}​​​​

