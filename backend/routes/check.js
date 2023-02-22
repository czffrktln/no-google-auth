const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/UserSchema')

router.post('/username', async (req, res) => {
  const [data] = await User.find({username: req.body.username})
  // const data = await User.exists({username: req.body.username})

  console.log(data);
  res.send(data)
})

router.post('/email', async (req, res) => {
  const [data] = await User.find({email: req.body.email})
  
  console.log(data);
  res.send(data)
})

module.exports = router