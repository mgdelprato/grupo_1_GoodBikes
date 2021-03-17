module.exports=function(sequelize,dataTypes){
    let alias="Address";
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
        street:{
            type:dataTypes.STRING,
            defaultValue:'-'
        },
        street_number:{
            type:dataTypes.INTEGER,
            defaultValue:'-'
        },
        street_locality:{
            type:dataTypes.STRING,
            defaultValue:'-'
        },
        street_apartment:{
            type:dataTypes.STRING,
            defaultValue:'-'
        },
        street_postal_code:{
            type:dataTypes.STRING,
            defaultValue:'-'
        },
    }
    let config={
        tableName:'addresses',
        timestamps:true,
        underscored:true
    }

    let Address = sequelize.define(alias,cols,config)

        Address.associate = function(models){
            Address.belongsTo(models.User,{
                as:"User",
                foreingKey:"user_id"
            });
        }
    return Address
}