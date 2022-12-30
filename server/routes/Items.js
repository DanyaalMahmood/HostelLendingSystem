const { Router } = require('express');
const checkUser = require('../middleware/authMiddleware');
const Uploaditem = require('../controllers/Uploaditem');
const getitems = require('../controllers/getitems');
const multer = require('multer');
const path = require('node:path');
const getitem =require('../controllers/getitem')
const Updateitem = require('../controllers/Updateitem')

const getuploadeditems = require('../controllers/getuploadeditems')

const imageUpload = multer({
  dest: 'images',
})

const router = Router();




router.post('/uploaditem',checkUser, imageUpload.single('image'), Uploaditem);
router.put('/updateitem',checkUser, imageUpload.single('image'), Updateitem);


router.get('/items', checkUser, getitems);
router.get('/uploadeditems', checkUser, getuploadeditems);
router.post('/item', checkUser, getitem);


module.exports = router;