const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const companyRoute = require('./routes/companyRoute');
const productRoute = require('./routes/productRoute');
const authRoute = require('./routes/authRoute');

const app = express();
app.use(cors());

mongoose
  .connect('mongodb://localhost/companies-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connected Successfully');
  });

global.userIN = null;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
  })
);
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});

app.use('/companies', companyRoute);
app.use('/products', productRoute);
app.use('/users', authRoute);

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
