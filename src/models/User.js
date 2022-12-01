module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: { 
      allowNull: false, 
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
    underscored: true,
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPost, {
      foreignKey: 'user_id',
      as: 'blog_posts'
    })
  };

  return user;
};