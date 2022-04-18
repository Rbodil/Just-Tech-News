const User = require('./User');
const Post = require('./post.js')
const bcrypt = require('bcrypt');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };