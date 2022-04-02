const express = require('express');
const middleware = require('./middleware');
const PORT = 8080;

const app = express();

app.use(middleware());

const inventoryRoute = require('./routes/inventory');
app.use('/inventory', inventoryRoute)

app.listen(PORT, () => {
    console.log(`port: ${PORT} is running`)
})