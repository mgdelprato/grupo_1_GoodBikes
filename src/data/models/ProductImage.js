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
        }​​​​
    }​​​​;
    let config = {​​​​
        tableName: 'PRODUCTS_IMAGES',
        timestamps: true,
        underscored: true
    } ​
    ​​​const ProductImage = sequelize.define(alias, cols, config)
    return ProductImage

}​​​​

