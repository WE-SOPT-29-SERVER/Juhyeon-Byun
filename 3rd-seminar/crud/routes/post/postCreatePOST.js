const util = require("../../lib/util");
const statusCode = require("../../constants/statusCode");
const responseMessage = require("../../constants/responseMessage");
const users = require("../../dbMocup/user");
const posts = require("../../dbMocup/post");
// 받아와야 할 값 -> title, content, writer id는 +1 해주기
module.exports = async(req, res) => {
    const { title, content, writer } = req.body;

    // title, content, writer 중에 하나라도 값이 없는 경우
    if ( !title || !content || !writer ) {
        return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.NULL_VALUE
        ));
    }

    // 추가 데이터를 post에 push
    newPostData = {
        id: posts.length + 1,
        title,
        content,
        writer
    };

    posts.push(newPostData);

    res.status(statusCode.OK)
    .send(util.success(
            statusCode.OK,
            responseMessage.CREATED_POST,
            newPostData
            ));
};