module.exports=function(sequelize,dataTypes){
    let alias="User";
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        first_name:{
            type:dataTypes.STRING,
            notNull:true
        },
        last_name:{
            type:dataTypes.STRING
        },
        email:{
            type:dataTypes.STRING,
            notNull:true
        },
        password:{
            type:dataTypes.STRING,
            notNull:true
        },
        avatar:{
            type:dataTypes.STRING
        },
        still_alive:{
            type:dataTypes.STRING,
            notNull:true,
            defaultValue:'YES'
        },
        still_alive:{
            type:dataTypes.STRING,
            notNull:true,
            defaultValue:'NO'
        }
    }
    let config={
        tableName:'USERS',
        timestamps:true,
        underscored:true
    }

    let User = sequelize.define(alias,cols,config)

        User.associate = function(models){
            User.hasMany(models.PurchaseDetail,{
                as:"PurchaseDetails",
                foreingKey:"user_id"
            });
            User.hasMany(models.PurchaseTransaction,{
                as:"PurchasesTransactions",
                foreingKey:"user_id"
            });
            User.hasMany(models.PaymentMethod,{
                as:"PaymentMethod",
                foreingKey:"user_id"
            });
            User.hasMany(models.Address,{
                as:"Addresses",
                foreingKey:"user_id"
            });

        }
    return User
}