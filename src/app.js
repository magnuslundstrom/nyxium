const path = require('path')
const http = require('http')
const reload = require('reload')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000


// Paths

const publicDirPath = path.join(__dirname, '../public/')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Handlebar setup, the engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Static Dir
app.use(express.static(publicDirPath))







// Forside
app.get('', (req, res) => {
    res.render('index', {
        metaTitle: 'Front page title',
        metaDescription: 'Welcome to Nyxium front page',
        coverBg: 'fpCover'
    })
})

// Integrationer hovedside
app.get('/integrationer', (req, res) => {
    res.render('integrationer', {
        metaTitle: 'Integrationer',
        metaDescription: 'Integrationer til Nyxium',
        coverBg: 'intCover'
    })
})

// Integrationer Dinero side
app.get('/integrationer/dinero', (req, res) => {
    res.render('integration-emne', {
        metaTitle: 'Dinero integration',
        metaDescription: 'Dinero integration',
        coverBg: 'intDineroCover'
    })
})

const server = http.createServer(app)
server.listen(port, () => console.log('server started!'))
reload(app) 
