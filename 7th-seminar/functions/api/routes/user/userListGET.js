const _ = require('lodash');
const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { userDB, postDB } = require('../../../db');

module.exports = async (req, res) => {
  let client;

  try {
    client = await db.connect(req);

    const users = await userDB.getAllUsers(client);
    const userIds = [...new Set(users.filter(Boolean).map((o) => o.id))];
    const posts = await postDB.getPostsByUserIds(client, userIds);

    for (let i = 0; i < users.length; i++) {
      users[i].posts = _.filter(posts, (o) => o.userId === users[i].id);
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_ALL_USERS_SUCCESS, { users }));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};
