const User = require('./User');
const Project = require('./Cocktails');

User.hasMany(Cocktails, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Cocktails.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Cocktails };