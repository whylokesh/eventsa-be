var express = require('express');
var router = express.Router();
var _ = require('lodash');

// POST API to verify phone number and pin using lodash
router.post('/verify', function (req, res, next) {
  const { phoneNumber, pin } = req.body;

  // Using lodash to check if the phone number and pin are valid strings and numbers
  const isPhoneNumberValid = _.isString(phoneNumber) && /^\d+$/.test(phoneNumber);
  const isPinValid = _.isString(pin) && /^\d+$/.test(pin);

  if (isPhoneNumberValid && isPinValid) {
    res.json({
      success: true,
      message: "Phone number and pin are valid",
      phoneNumber: phoneNumber,
      pin: pin
    });
  } else {
    res.status(400).json({
      success: false,
      error: "Invalid input. Both phone number and pin must be numeric strings."
    });
  }
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
