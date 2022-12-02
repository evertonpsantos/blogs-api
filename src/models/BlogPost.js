module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: { 
      allowNull: false, 
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    published: {
      type: DataTypes.DATE,
    },
    updated: {
      type: DataTypes.DATE
    }, 
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      foreignKey: true,
    }}, {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true
    });

    blogPost.associate = (models) => {
      blogPost.belongsTo(models.User, {
        foreignKeys: 'userId',
        as: 'user'
      })
    };

  return blogPost;
};