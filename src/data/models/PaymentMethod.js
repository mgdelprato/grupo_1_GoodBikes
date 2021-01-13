module.exports=function(sequelize,dataTypes){
    let alias="PaymentMethod";
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
        alias:{
            type:dataTypes.STRING,
            notNull:true,
            defaultValue:'My Payment'
        },
        brand_card:{
            type:dataTypes.STRING,
            notNull:true
        },
        number_card:{
            type:dataTypes.STRING,
            notNull:true
        },
        bank:{
            type:dataTypes.STRING,
            notNull:true
        }
    };
    let config={
        tableName:'PAYMENTS_METHODS',
        timestamps:true,
        underscored:true
    }

    let PaymentMethod = sequelize.define(alias,cols,config)

    PaymentMethod.associate = function(models){
        PaymentMethod.belongsTo(models.User,{
                as:"User",
                foreingKey:"user_id_fk"
            });
            PaymentMethod.hasMany(models.PurchaseTransaction,{
                as:"PurchaseTransaction",
                foreingKey:"payment_method_id_fk"
            });
        }
    return PaymentMethod
}