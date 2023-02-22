const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/UserSchema')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

const secretKey = "grege034=-m3kv2398mcsc"

router.post('/', async (req, res) => {
  const [data] = await User.find({username: req.body.username})
  const compareHash = (password, hashed)=>{
    return bcrypt.compareSync(password, hashed)
  }
  if (data && compareHash(req.body.password, data.password)) {
    const token = jwt.sign({id: data._id, username: data.username}, secretKey);
    res.send(token)
  } else console.log("OUT");

})

module.exports = router