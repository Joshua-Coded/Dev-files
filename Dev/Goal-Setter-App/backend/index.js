const express = require('express');
const dotnenv = require('dotenv').config()
const port = process.env.PORT || 8000
const app = express()



app.listen(port, () => console.log(`Server running on ${port}`))