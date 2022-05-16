const express = require('express');
const colors = require('colors');
const dotnenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 8000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/goals', require('./routes/goalRoute'))
app.use('/api/users', require('./routes/userRoute'))


app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))