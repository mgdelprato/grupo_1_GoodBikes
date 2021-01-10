module.exports = function(sequelize, dataTypes) {​​​​
        let alias = "PurchaseDetail";
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
            purchase_transaction_id_fk: {​​​​
                type: dataTypes.INTEGER,
                notNull: true
            },​​​​
            product_id_fk: {​​​​
                type: dataTypes.INTEGER,
                notNull: true
            },​​​​
            still_alive: {​​​​
                type: dataTypes.STRING,
                notNull: true,
                defaultValue: 'YES'
            },​​​​
            quantity: {​​​​
                type: dataTypes.INTEGER,
                notNull: true,
            }
        }​​​​;
        let config = {​​​​
            tableName: 'PURCHASES_DETAILS',
            timestamps: true,
            underscored: true
        } ​
        ​​​const PurchaseDetail = sequelize.define(alias, cols, config)
        return PurchaseDetail
    
    }​​​​
    
    