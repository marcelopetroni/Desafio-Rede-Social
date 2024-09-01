const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database').sequelize;

const Post = sequelize.define('Post', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  totalLikes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  publishedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'posts',
  timestamps: true,
  underscored: true,
});

module.exports = Post;
