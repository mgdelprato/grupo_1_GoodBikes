module.exports = function(sequelize, dataTypes) {​​​​
    let alias = "PaymentMethod";
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
        alias: {​​​​
            type: dataTypes.STRING,
            notNull: true,
            defuatlValue: 'My Payment'
        }​​​​,
        brand_card: {​​​​
            type: dataTypes.STRING,
            notNull: true
        }​​​​,
        number_card: {​​​​
            type: dataTypes.STRING,
            notNull: true
        }​​​​,
        bank: {​​​​
            type: dataTypes.STRING,
            notNull: true
        }
    }​​​​;
    let config = {​​​​
        tableName: 'PAYMENTS_METHODS',
        timestamps: true,
        underscored: true
    } ​
    ​​​const PaymentMethod = sequelize.define(alias, cols, config)
    return PaymentMethod

}​​​​

