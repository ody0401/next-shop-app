const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Post extends Model {
  static init(sequelize) {
    return super.init({
      price: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      product: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      information: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }, {
      modelName: 'Post',
      tableName: 'posts',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
      sequelize,
    });
  }

  static associate(db) {
    db.Post.belongsTo(db.User);
    db.Post.hasOne(db.Image);
  }
}