const express = require('express');
const mongoose = require('mongoose');
const companyRoute = require('./routes/companyRoute');

const app = express();

mongoose
  .connect('mongodb://localhost/companies-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connected Successfully');
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/companies', companyRoute);

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
