const express = require('express')
const router = new express.Router()

const supportData = require('../pageData/support/support.json')
const supportArticles = require('../pageData/support/supportArticles.json')


// Support
router.get('/support', (req, res) => {
    res.render('support/support', {
        ...supportData,
    })
})

// Support Integration landing
router.get('/support/integrationer', (req, res) => {
    res.render('support/supportcategori', {
        ...supportData,
        articles: supportArticles.articles
    })
})

// Support Integration landing
router.get('/support/integrationer/hvordan', (req, res) => {
    res.render('support/supportarticle', {
        ...supportData,
        articles: supportArticles.articles
    })
})


module.exports = router