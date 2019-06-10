/**
 * Created by smf on 2019/6/10.
 */
var express = require('express');
var router = express.Router();
var User = require("../api/user");

router.get('/register', User.userReg);
router.get('/login', User.userLogin);
module.exports = router;