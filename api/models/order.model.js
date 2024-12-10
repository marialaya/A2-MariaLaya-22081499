module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
      order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      order_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Customers",
          key: "customer_id",
        },
      },
      item_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Items",
          key: "item_id",
        },
      },
    });
    return Order;
  };
  