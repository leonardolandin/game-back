const mongoDB = require('../config/database');

const commentSchema = new mongoDB.Schema({
    username: String,
    email: String,
    description: String,
    created: Date
})
const Comment = mongoDB.model('comment', commentSchema, 'comments')

module.exports = Comment 