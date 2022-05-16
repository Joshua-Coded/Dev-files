const express = require('express');
const dotnenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/goals', require('./routes/goalRoute'))


app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))