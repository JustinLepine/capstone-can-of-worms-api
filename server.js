const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

const inventoryRoute = require('./routes/inventory');
app.use('/inventory', inventoryRoute)

app.listen(PORT, () => {
    console.log(`port: ${PORT} is running`)
})