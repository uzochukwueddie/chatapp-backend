const express = require('express');

const router = express.Router();

const ImageCtrl = require('../controllers/images');
const AuthHelper = require('../Helpers/AuthHelper');

router.get(
  '/set-default-image/:imgId/:imgVersion',
  AuthHelper.VerifyToken,
  ImageCtrl.SetDefaultImage
);
router.post('/upload-image', AuthHelper.VerifyToken, ImageCtrl.UploadImage);

module.exports = router;
