const path = require('path')
const http = require('http')
const reload = require('reload')
const express = require('express')
const hbs = require('hbs')

// Other routs
const supportRouter = require('./routes/support')
const integrationRouter = require('./routes/integrationer')

// Json imports
//

const app = express()

app.use(supportRouter)
app.use(integrationRouter)

const port = process.env.PORT || 3000



// Paths

const publicDirPath = path.join(__dirname, '../public/')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Handlebar setup, the engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)
hbs.registerPartials(partialsPath + '/smallcomponents')

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

// Priser
app.get('/priser', (req, res) => {
    res.render('priser', {
        metaTitle: 'Priser',
        metaDescription: 'Lær mere om vores ekstremt gode priser',
        coverBg: 'prisCover'
    })
})

// test

app.get('/test', (req, res) => {
    res.render('test', {

    })
})


const server = http.createServer(app)
server.listen(port, () => console.log('server started!'))
reload(app) 
