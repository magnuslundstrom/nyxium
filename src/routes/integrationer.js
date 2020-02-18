const express = require('express')
const router = new express.Router()

// JSON imports
const dineroIntData = require('../pageData/dinero-int.json')


// Integrationer hovedside
router.get('/integrationer', (req, res) => {
    res.render('integration/integrationer', {
        metaTitle: 'Integrationer',
        metaDescription: 'Integrationer til Nyxium',
        coverBg: 'intCover'
    })
})

// Integrationer Dinero side
router.get('/integrationer/dinero', (req, res) => {
    res.render('integration/integration-category', {
        ...dineroIntData
    })
})

module.exports = router