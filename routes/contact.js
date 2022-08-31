const express = require('express');
const router = express.Router();
const { check, validationResults } = require('express-validator');

function middlewareFunctionPlaceholder(req, res, next) {
  res.status(200).json({ msg: 'yahooooo' });
  next();
}

//* route    GET api/contacts
//* @desc     Get all contacts
// router.get('/',(req,res)=>{
//         console.log("/test request called");
//     res.send('Welcome to GeeksforGeeks');
// })
router.get('/', (req, res) => {
  res.send('Birds home page');
});
module.exports = router;
