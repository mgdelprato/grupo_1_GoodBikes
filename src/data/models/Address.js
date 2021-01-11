module.exports= function(sequelize, dataTypes) {​​​​
    let alias = "Address";
    let cols = {​​​​
        id: {​​​​
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }​​​​,
        users_id_fk: {​​​​
            type: dataTypes.INTEGER, 
            notNull: true
        }​​​​,
        street: {​​​​
            type: dataTypes.STRING,
        }​​​​,
        street_number: {​​​​
            type: dataTypes.STRING,
        }​​​​,
        street_state: {​​​​
            type: dataTypes.STRING,
        }​​​​,
        street_locality: {​​​​
            type: dataTypes.STRING,
        }​​​​,
        street_apartment: {​​​​
            type: dataTypes.STRING,
        }​​​​,
        street_postal_code: {​​​​
            type: dataTypes.STRING,
        }​​​​
        }

    let config = {​​​​
        tableName: 'ADDRESSES',
        timestamps: true,
        underscored: true
    } 
​    let Address = sequelize.define(alias, cols, config)

        // Address.associate = function(models){
        //         Address.belongsTo(models.User,{
        //         as:"User",
        //         foreinKey:"user_id_fk"
        // });
        // }

        return Address
}​​​​

