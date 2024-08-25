'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class PostLike extends Model {}

  PostLike.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'posts',
        key: 'id'
      }
    },
    likedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PostLike',
    tableName: 'post_likes',
    timestamps: false,
    underscored: true
  });

  return PostLike;
};
