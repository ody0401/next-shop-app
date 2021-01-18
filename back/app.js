const express = require('express')
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const path = require('path');

const db = require('./models');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const passportConfig = require('./passport');

dotenv.config();

const app = express();
db.sequelize.sync({ force: true })
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);
passportConfig();

app.use(cors({
  origin: true,
  credentials: true,
}))
app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.SECRET,
}))
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/user', userRouter);
app.use('/post', postRouter);


const port = 3065
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})