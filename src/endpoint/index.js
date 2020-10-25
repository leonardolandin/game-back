const CommentDAO = require('../dao/commentDAO')

module.exports = (req, res) => {
    CommentDAO.getComments().then((data) => {
        res.status(200)
        res.send(data)
    })
}