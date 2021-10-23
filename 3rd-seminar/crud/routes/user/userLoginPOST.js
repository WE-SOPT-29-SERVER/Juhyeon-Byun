const util = require("../lib/util");
const statusCode = require("../constants/statusCode");
const responseMessage = require("../constants/responseMessage");
const users = require("../dbMocup/user");

module.exports = async(req, res) => {
    const { id, password } = req.body;

    // request data 없는 경우
    if ( !id || !password ) {
        return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.NULL_VALUE
            ));
    }

    // 해당하는 user정보 db에서 가져오기
    const user = users.filter(obj => obj.email === email)[0];

    // user가 없는 경우
    if (!user) {
        return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.NO_USER
            ));
    }

    // user 정보와 password 일치하는지 확인
    if (user.password !== password) {
        return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.MISS_MATCH_PW
            ));
    }

    // 로그인 성공 시 user 정보 담아서 res
    const userData = { 
        id: user.id,
        email: user.email,
        name: user.name,
    };
    res.status(statusCode.OK)
    .send(util.success(
        statusCode.OK,
        responseMessage.LOGIN_SUCCESS,
        userData
        ));
}