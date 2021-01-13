module.exports=function(sequelize,dataTypes){
    let alias="PurchaseDetail";
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        users_id_fk:{
            type:dataTypes.INTEGER,
            notNull:true
        },
        purchase_transaction_id_fk:{
            type:dataTypes.INTEGER,
            notNull:true
        },
        product_id_fk:{
            type:dataTypes.INTEGER,
            notNull:true
        },
        quantity:{
            type:dataTypes.INTEGER,
            notNull:true
        },
        still_alive:{
            type:dataTypes.STRING,
            notNull:true,
            defaultValue:'YES'
        }
    };
    let config={
        tableName:'PURCHASES_DETAILS',
        timestamps:true,
        underscored:true
    }

    let PurchaseDetail = sequelize.define(alias,cols,config)

    PurchaseDetail.associate = function(models){
        PurchaseDetail.belongsTo(models.Product,{
                as:"Products",
                foreingKey:"product_id_fk"
            });
            PurchaseDetail.belongsTo(models.PurchaseTransaction,{
                as:"PurchaseTransaction",
                foreingKey:"purchase_transaction_id_fk"
            });
            PurchaseDetail.belongsTo(models.User,{
                as:"User",
                foreingKey:"user_id_fk"
            });
        }
    return PurchaseDetail
}