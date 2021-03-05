module.exports=function(sequelize,dataTypes){
    let alias="ProductImage";
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        product_id:{
            type:dataTypes.INTEGER,
            notNull:true
        },
        image_name:{
            type:dataTypes.STRING,
            notNull:true
        }
        
    };
    let config={
        tableName:'products_images',
        timestamps:true,
        underscored:true
    }

    let ProductImage = sequelize.define(alias,cols,config)

    ProductImage.associate = function(models){
        ProductImage.belongsTo(models.Product,{
                as:"Product",
                foreingKey:"product_id"
            });
        }
    return ProductImage
}