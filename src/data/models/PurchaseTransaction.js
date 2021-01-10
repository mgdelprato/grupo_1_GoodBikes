module.exports = function(sequelize, dataTypes) {​​​​
        let alias = "PurchaseTransaction";
        let cols = {​​​​
            id: {​​​​
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            }​​​​,
            user_id_fk: {​​​​
                type: dataTypes.INTEGER,
                notNull: true
            }​​​​,
            payment_method_id_fk: {​​​​
                type: dataTypes.INTEGER,
                notNull: true
            },​​​​
            transaction_date: {​​​​
                type: dataTypes.DATETIME,
                notNull: true
            },​​​​
            transaction_amount: {​​​​
                type: dataTypes.DECIMAL,
                notNull: true
            },​​​​
            still_alive: {​​​​
                type: dataTypes.STRING,
                notNull: true,
                defaultValue: 'YES'
            },​​​​
        }​​​​;
        let config = {​​​​
            tableName: 'PURCHASES_TRANSACTIONS',
            timestamps: true,
            underscored: true
        } ​
        ​​​const PurchaseTransaction = sequelize.define(alias, cols, config)
        return PurchaseTransaction
    
    }​​​​
    
    