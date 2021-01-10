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
       
        PurchaseDetail.associate = function(models){
            PurchaseDetail.belognsTo(models.Product,{
                    as:"products",
                    foreinKey:"product_id_fk"
            });
            PurchaseDetail.belognsTo(models.PurchaseTransaction,{
                as:"purchaseTransaction",
                foreinKey:"purchase_transaction_id_fk"
             });
            PurchaseDetail.belognsTo(models.User,{
            as:"user",
            foreinKey:"user_id_fk"
         });
    
    }
       
       
        return PurchaseDetail
    
    }​​​​
    
    