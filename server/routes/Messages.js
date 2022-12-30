const { Router } = require('express');
const checkUser = require('../middleware/authMiddleware');
const postmessage = require('../controllers/Postmessage');
const Getsenders = require('../controllers/Getsenders');
const getmessages = require('../controllers/getmessages');
const router = Router();




router.post('/messages',checkUser, postmessage);
router.post('/senders',checkUser, Getsenders);
router.post('/getmessages',checkUser, getmessages);


module.exports = router;

