const path = require('path')
const http = require('http')
const reload = require('reload')
const express = require('express')
const hbs = require('hbs')

// Other routs
const supportRouter = require('./routes/support')
const integrationRouter = require('./routes/integrationer')

// Json imports

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
        metaTitle: 'Velommen til Nyxium',
        metaDescription: 'Nyxium forbinder al din online data',

    })
})

// Priser
app.get('/priser', (req, res) => {
    res.render('priser', {
        metaTitle: 'Se vores priser',
        metaDescription: 'Lær mere om vores ekstremt gode priser',

    })
})

// Om

app.get('/om', (req, res) => {
    res.render('om', {
        metaTitle: 'Om Nyxium',
        metaDescription: 'Lær mere om vores ekstremt gode priser',
    })
})

// Kontakt

app.get('/kontakt', (req, res) => {
    res.render('kontakt', {
        metaTitle: 'Kontakt Nyxium',
        metaDescription: 'Konkakt os og lær meget mere',
    })
})

// Robots.txt
app.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, '../robots.txt'))
})

//  404
app.get('/*', (req, res) => {
    res.render('404', {
        metaTitle: 'Kontakt Nyxium',
        metaDescription: 'Konkakt os og lær meget mere',
    })
})


const server = http.createServer(app)
server.listen(port, () => console.log('server started!'))
reload(app) 
