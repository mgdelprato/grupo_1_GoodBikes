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
        
        PurchaseTransaction.associate = function(models){
            PurchaseTransaction.hasMany(models.PurchaseDetail,{
                    as:"purchasesDetails",
                    foreinKey:"purchases_transaction_id_fk"
            });
            PurchaseTransaction.belognsTo(models.User,{
                as:"User",
                foreinKey:"user_id_fk"
             });
             PurchaseTransaction.belognsTo(models.PaymentMethod,{
            as:"paymentMethod",
            foreinKey:"paymentMethod_id_fk"
         });
    
    }
        
        return PurchaseTransaction
    
    }​​​​
    
    