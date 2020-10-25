const CommentDAO = require('../dao/commentDAO')

module.exports = (req, res) => {
    const comment = req.body;

    console.log(comment)

    if(comment) {
        if(comment.user.email.includes('@') && comment.user.name.length && comment.message.length) {
            let dateNow = new Date();
            let data2 = new Date(dateNow.valueOf() - dateNow.getTimezoneOffset() * 60000);
            let dateBrazil = data2.toISOString().replace(/\.\d{3}Z$/, '');

            let newComment = {
                username: comment.user.name,
                email: comment.user.email,
                description: comment.message,
                created: dateBrazil
            }

            CommentDAO.getCommentByEmail(newComment.email).then(response => {
                if(response == undefined || response == null) {
                    CommentDAO.createNewComment(newComment).then((response) => {
                        newComment.message = "O comentário foi criado com sucesso"
                        res.status(201);
                        res.send(newComment);
                    })
                } else {
                    res.status(401)
                    res.send("Alguem já fez um comentário com esse e-mail")
                }
            })
        } else {
            res.status(401)
            res.send("E-mail inválido, não possui @")
        }
    }
}