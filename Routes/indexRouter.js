const {Router} = require("express");
const { home, create, getAllCustomer } = require("../controller/indexController");
const router = Router();


router.get('/',home);
// router.get('/all',getAllCustomer);
// router.post('/create',create);



module.exports = {router};