const express = require('express');
const router = express.Router();
const { check, validationResults } = require('express-validator');
const { copyFile } = require('fs');

// mongoose schema
const Contact = require('../models/Contact');
// TEST
// router.get('/',(req,res)=>{
//         console.log("/test request called");
//     res.send('Welcome to The Contact Bank');
// })
//* route    GET api/contacts
//* @desc     Get all contacts

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    req.statusCode(500).send('Server Error, GET Method');
  }
});

//* route    POST api/contacts
//* @desc     Add a single contact
router.post('/', async (req, res) => {
  // destructure the request
  const { id, firstName, lastName, email, phoneNumber, countryCode } = req.body;

  // create a new contact object via schema and destructured values
  try {
    const newContact = new Contact({
      id,
      firstName,
      lastName,
      email,
      phoneNumber,
      countryCode
    });
    // save contact databases and respond with new contact in json form
    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error, POST Method');
  }
});

//* route    PUT api/contacts/:id
//* @desc     edit a single contact
router.put('/:id', async (req, res) => {
  const { id, firstName, lastName, email, phoneNumber, countryCode } = req.body;

  //* Build out a body from req.body to later replace the values in the database
  contactFields = {};
  if (id) contactFields.id = id;
  if (firstName) contactFields.firstName = firstName;
  if (lastName) contactFields.lastName = lastName;
  if (email) contactFields.email = email;
  if (phoneNumber) contactFields.phoneNumber = phoneNumber;
  if (countryCode) contactFields.countryCode = countryCode;

  try {
    // * match database id with id passed in the params in the route
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: 'Contact Not Found' });

    // * The UPDATE
    // * In mongoDB The $set operator replaces the value of a field with the specified value.
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    console.error(err.msg);
    res.status(500).send('Server Error, PUT method');
  }
});

//* @route    DELETE api/contacts/:id
//* @desc     Delete a contact
router.delete('/:id', async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: 'Contact Not Found' });

    // *DELETE
    await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Contact Removed' });
  } catch (err) {
    console.error(err.msg);
    res.status(500).send('Server Error, DELETE method');
  }
});

module.exports = router;
