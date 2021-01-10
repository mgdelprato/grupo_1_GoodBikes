module.exports = function(sequelize, dataTypes) {​​​​
    let alias = "User";
    let cols = {​​​​
        id: {​​​​
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }​​​​,
        first_name: {​​​​
            type: dataTypes.STRING,
            notNull: true
        }​​​​,
        last_name: {​​​​
            type: dataTypes.STRING,
            notNull: true
        }​​​​,
        email: {​​​​
            type: dataTypes.STRING,
            notNull: true
        }​​​​,
        password: {​​​​
            type: dataTypes.STRING,
            notNull: true
        }​​​​,
        avatar: {​​​​
            type: dataTypes.STRING,
        },
        still_alive: {​​​​
            type: dataTypes.STRING,
            notNull: true,            
            defaultValue: 'YES'
        },
        is_admin: {​​​​
            type: dataTypes.STRING,
            notNull: true,            
            defaultValue: 'NO'
        }
    }​​​​;
    let config = {​​​​
        tableName: 'USERS',
        timestamps: true,
        underscored: true
    } ​
    ​​​const User = sequelize.define(alias, cols, config)
    return User

}​​​​

