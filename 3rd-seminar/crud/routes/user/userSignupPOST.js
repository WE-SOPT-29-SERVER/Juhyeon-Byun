const util = require("../../lib/util");
const statusCode = require("../../constants/statusCode");
const responseMessage = require("../../constants/responseMessage");
const users = require("../../dbMocup/user");

module.exports = async(req, res) => {
    // const email = req.body.email;
    // const password = req.body.password;
    // const name = req.body.name;
    const { email, name, password } = req.body;

    if ( !email || !name || !password ) { // 예외처리
        //return res.status(400).send({ status: 400, message: "BAD REQUEST" });
        return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(
                statusCode.BAD_REQUEST,
                responseMessage.NULL_VALUE
                ));
    }

    const alreadyUser = users.filter(obj => obj.email === email).length > 0;
    if (alreadyUser) {
        return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(
                statusCode.BAD_REQUEST,
                responseMessage.ALREADY_EMAIL
                ));
    }

    const newUser = { 
        id: users.length + 1,
        name,
        password,
        email,
    };

    res.status(statusCode.OK)
    .send(util.success(
            statusCode.OK,
            responseMessage.CREATED_USER,
            newUser
            ));
}