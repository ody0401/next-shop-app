const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const passport = require('passport');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hihi');
})

router.post('/signup', async(req, res, next) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email},
    });
    if (user) {
      return res.status(400).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 11);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    return res.status(200).send('회원가입 성공');
  } catch (error) {
    console.error(error);
    return next(error);
  }
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (error, user, info) => {
    if (error) {
      console.error(error);
      return next(error);
    }
    if (info) {
      return res.status(400).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const loginUser = await User.findOne({
        where: {id: user.id}
      })
      return res.status(200).json(loginUser)
    })
  })(req, res, next);
});

module.exports = router;