const util = require("../../lib/util");
const statusCode = require("../../constants/statusCode");
const responseMessage = require("../../constants/responseMessage");
const users = require("../../dbMocup/user");
const posts = require("../../dbMocup/post");

module.exports = async(req, res) => {
    // id는 파라미터로, title이랑 content는 req로 받기
    const id = req.params.id;
    const { title, content } = req.body;

    if ( !id || !title || !content ) {
        return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.NULL_VALUE
        ));
    }

    // 해당 고유값 가진 게시글 db에서 가져오기
    var post = posts.filter(obj => obj.id === id)[0];

    // 해당 고유값 가진 게시글이 없는 경우
    if(!post) {
        return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.NO_POST_ID
        ));
    }

    post.title = title;
    post.content = content;

    res.status(statusCode.OK)
    .send(util.success(
        statusCode.OK,
        responseMessage.UPDATED_POST,
        post
    ));
};