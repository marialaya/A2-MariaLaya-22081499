module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_phonenumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Customer;
};

