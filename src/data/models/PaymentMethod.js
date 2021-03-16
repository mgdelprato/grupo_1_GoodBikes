module.exports=function(sequelize,dataTypes){
    let alias="PaymentMethod";
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
        alias:{
            type:dataTypes.STRING,
            notNull:true,
            defaultValue:'My Payment'
        },
        brand_card:{
            type:dataTypes.STRING,
            notNull:true,
            defaultValue:'-'

        },
        number_card:{
            type:dataTypes.STRING,
            notNull:true,
            defaultValue:'-'
        },
        bank:{
            type:dataTypes.STRING,
            notNull:true,
            defaultValue:'-'
        }
    };
    let config={
        tableName:'payments_methods',
        timestamps:true,
        underscored:true
    }

    let PaymentMethod = sequelize.define(alias,cols,config)

    PaymentMethod.associate = function(models){
        PaymentMethod.belongsTo(models.User,{
                as:"User",
                foreingKey:"user_id"
            });
            PaymentMethod.hasMany(models.PurchaseTransaction,{
                as:"PurchaseTransaction",
                foreingKey:"payment_method_id"
            });
        }
    return PaymentMethod
}