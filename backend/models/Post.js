'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}
  
  Post.init({
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
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
    underscored: true,
    timestamps: true,
  });
  return Post;
};
