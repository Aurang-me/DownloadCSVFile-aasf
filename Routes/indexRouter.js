const {Router} = require("express");
const { home } = require("../controller/indexController");
const router = Router();


router.get('/home',home);
// router.get('/all',getAllCustomer);
// router.post('/create',create);



module.exports = {router};