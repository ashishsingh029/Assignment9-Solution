const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/db.config')
const {
    studentInfoRouter,
    studentAcademicInfoRouter,
    combinedRouter
} = require('./routes')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5101
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get("/", (req, res) => {
    res.send("<h1>REST API Assingment</h1>")
})
app.use("/studentinfo", studentInfoRouter)
app.use("/studentacademicinfo", studentAcademicInfoRouter)
app.use("/combined",combinedRouter)
dbConnect()
app.listen(PORT)
