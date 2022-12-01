module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: { 
      allowNull: false, 
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
  });

  return category;
};