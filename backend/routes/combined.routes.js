const express = require('express')
const {
    addToBothCollections,
    getFromBothCollectionsByRoll
} = require('../controllers/combined.controller')
const combinedRouter = express.Router()

combinedRouter.post("/", addToBothCollections)
combinedRouter.get("/:roll", getFromBothCollectionsByRoll)

module.exports = combinedRouter