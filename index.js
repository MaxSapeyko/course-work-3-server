const express = require('express');
require('dotenv').config();
const sequelize = require('./db');
const models = require('./models/models.js');
const cors = require('cors');
const path = require('path');
const router = require('./routes/index');
const fileupload = require('express-fileupload');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileupload({}));
app.use('/api', router);

// Обработка ошибок
app.use(errorHandler);


const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  } catch (error) {
    console.log(error);
  }
};

start();
