const util = require("../../lib/util");
const statusCode = require("../../constants/statusCode");
const responseMessage = require("../../constants/responseMessage");
const users = require("../../dbMocup/user");
const posts = require("../../dbMocup/post");

module.exports = async(req, res) => {
    // 모든 게시물 정보 담아서 res
    res.status(statusCode.OK)
    .send(util.success(
        statusCode.OK,
        responseMessage.GET_POST_SUCCESS,
        posts
        ));
}