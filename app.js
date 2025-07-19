const express = require('express');

const PORT = 8080;
const feedRoutes = require('./routes/feed')

const app = express();

app.use('/feed', feedRoutes)

app.listen(PORT, () => console.log(`App is running on PORT: ${PORT}`));