module.exports=function(sequelize,dataTypes){
    let alias="PurchaseTransaction";
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        user_id:{
            type:dataTypes.INTEGER,
            notNull:true
        },
        payment_method_id:{
            type:dataTypes.INTEGER,
            notNull:true
        },
        transaction_date:{
            type:dataTypes.DATE,
            notNull:true
        },
        transaction_amount:{
            type:dataTypes.DECIMAL,
            notNull:true
        },
        still_alive:{
            type:dataTypes.STRING,
            notNull:true,
            defaultValue:'YES'
        }
    };
    let config={
        tableName:'PURCHASES_TRANSACTIONS',
        timestamps:true,
        underscored:true
    }

    let PurchaseTransaction = sequelize.define(alias,cols,config)

    PurchaseTransaction.associate = function(models){
        PurchaseTransaction.hasMany(models.PurchaseDetail,{
                as:"PurchasesDetails",
                foreingKey:"purchases_transaction_id"
            });
        PurchaseTransaction.belongsTo(models.User,{
                as:"User",
                foreingKey:"user_id"
            });
        PurchaseTransaction.belongsTo(models.PaymentMethod,{
                as:"PaymentMethod",
                foreingKey:"paymentMehotd_id"
            });
        }
    return PurchaseTransaction
}