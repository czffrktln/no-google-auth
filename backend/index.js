const express = require('express')
const app = express()
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const access = require('./models/AccessSchema')
const User = require('./models/UserSchema')
const checkRoutes = require('./routes/check')
const loginRoutes = require('./routes/login')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

app.use(cors())
app.use(express.json())
app.use('/api/check', checkRoutes)
app.use('/api/login', loginRoutes)

const secretKey = "grege034=-m3kv2398mcsc"

mongoose.connect('mongodb://localhost:27017/no-google-auth', () => console.log('MongoDB connected'))
mongoose.set('strictQuery', false)

// mongoose.connect('mongodb://localhost:27017/googleAuth', {  })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Start the server after successful database connection
//     app.listen(port,()=>{
//         console.log("mukodik")
//     })   
//   })
//   .catch((error) => {
//     console.log('Error connecting to MongoDB', error);
//   });

app.get('/api/public', async (req, res) => {
  const data = await access.findOne({word: 'public'})
  console.log(data.word);
  res.send(data.word)
})

app.get('/api/private', async (req, res) => {
  console.log(req.headers);
  const token = req.header('Authorization').replace('Bearer ', '');
  const decoded = jwt.verify(token, secretKey);
  
  // const user = await User.findOne({ _id: decoded.id });
  // console.log(user);
  // if (user) {
  if (decoded) {
    res.send('PRIVATE')
  }
})

app.post('/api/signup', (req, res) => {
  console.log(req.body);

  const generateHash = (password) =>{
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
  }

  // const hashedPassword = await bcrypt.hash(password, saltRounds)

  const user = new User({username: req.body.username, email: req.body.email, password: generateHash(req.body.password)})
  user.save()
})

app.listen(port, () => {
  console.log('Server is running on port ' + port);
})