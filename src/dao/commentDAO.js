const mongoDB = require('../config/database');
const Comment = require('../model/CommentModel')
const CommentDAO = {}

CommentDAO.createNewComment = async function(comment) {
    return Comment.insertMany(comment, (err, result) => {
        return new Promise((resolve, reject) => {
            resolve(result)
        })
    })
}

CommentDAO.getCommentByEmail = async function(email) {
    return Comment.findOne({'email': email}, (err, result) => {
        return new Promise((resolve, reject) => {
            resolve(result)
        })
    })
}

CommentDAO.getComments = async function() {
    return Comment.find({}, (err, result) => {
        return new Promise((resolve, reject) => {
            resolve(result)
        })
    }).sort({created: 'desc'})
}

module.exports = CommentDAO;