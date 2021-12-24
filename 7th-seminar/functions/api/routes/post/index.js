const express = require('express');
const { checkUser } = require('../../../middlewares/auth'); // checkUser를 require
const router = express.Router();

const uploadImage = require('../../../middlewares/uploadImage'); // uploadImage를 require

router.get('/list', require('./postListGET'));

// 파일을 업로드해야 하는 route에 넣어준다. 미들웨어!
router.post('/', uploadImage, require('./postPOST'));

// 로그인이 필요한 요청에 checkUser를 넣어준다. 미들웨어!
router.get('/:postId', checkUser, require('./postGET'));

router.put('/:postId', require('./postPUT'));
router.delete('/:postId', require('./postDELETE'));

module.exports = router;
