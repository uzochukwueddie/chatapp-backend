const express = require('express');

const router = express.Router();

const UserCtrl = require('../controllers/users');
const AuthHelper = require('../Helpers/AuthHelper');

router.get('/users', AuthHelper.VerifyToken, UserCtrl.GetAllUsers);
router.get('/user/:id', AuthHelper.VerifyToken, UserCtrl.GetUser);
router.get(
  '/username/:username',
  AuthHelper.VerifyToken,
  UserCtrl.GetUserByName
);
router.post('/user/view-profile', AuthHelper.VerifyToken, UserCtrl.ProfileView);
router.post(
  '/change-password',
  AuthHelper.VerifyToken,
  UserCtrl.ChangePassword
);

module.exports = router;
