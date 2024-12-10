module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("Item", {
      item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      item_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      item_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
    return Item;
  };
  