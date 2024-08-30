const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database').sequelize;

const Post = sequelize.define('Post', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  summary: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalLikes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  publishedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'posts',
  timestamps: true,
  underscored: true,
});

module.exports = Post;
