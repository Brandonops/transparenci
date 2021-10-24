var express = require('express');
var router = express.Router();
const models = require('../models');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  const users = await models.User.findAll(
    { attributes: { exclude: ['password', "updatedAt"] } },
  );
  res.json(users);
});



// POST /api/v1/users/register
router.post('/register', async (req, res) => {
  // check for username and password on request
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      error: 'Please include username and password',
    });
  }

  // check database for existing user
  const user = await models.User.findOne({
    where: {
      email: req.body.email,
    },
  });

  // if exists, send error
  if (user) {
    return res.status(400).json({
      error: 'Email already in use',
    });
  }

  // hash password
  const hash = await bcrypt.hash(req.body.password, 10);

  // create user
  const newUser = await models.User.create({
    username: req.body.username,
    email: req.body.email,
    password: hash,
  });

  // respond with success message
  return res.status(201).json({});
});


router.post('/login', async (req, res) => {
  // check for username password
  // if not there, send error
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      error: 'Please include email and password',
    });
  }

  // find user from username
  const user = await models.User.findOne({
    where: {
      email: req.body.email,
    },
  });
  // console.log(user)
  // if no user, send error
  if (!user) {
    return res.status(404).json({
      error: 'No user with that email found',
    });
  }
  // store user in session
  console.log(req.session)
  req.session.user = user;

  // respond with user info
  res.json({
    id: user.id,
    email: user.email,
    username: user.username,
    updatedAt: user.updatedAt,
  });
});



router.get('/logout', (req, res) => {
  // clear user data from session
  req.session.user = null;

  // send success response
  res.json({
    success: 'Logged out successfully',
  });
});

router.get('/current', (req, res) => {
  const { user } = req.session;
  if (user) {
    res.json({
      id: user.id,
      email: user.email,
      username: user.username,
      updatedAt: user.updatedAt,
    });
  } else {
    res.status(401).json({
      error: 'Not logged in',
    });
  }
});

// Delete account
router.delete('/delete', (req, res) => {
  models.User.destroy({
    where: {
      id: req.session.id
    }
  }).then(deleted => {
    if (deleted === 0) {
      res.json({ error: 'Error!!!' })
    };
  });
  res.status(204).json({ sucess: 'Success' });
});




module.exports = router;
