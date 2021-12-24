const { Model, DataTypes, TIME } = require('sequelize');
const sequelize = require('../config/connection');
// create our Post model
class Post extends Model {
}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    post_contents: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creator_username: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'username'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;
