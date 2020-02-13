const path = require('path')
const http = require('http')
// const reload = require('reload')
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








app.get('', (req, res) => {


    res.render('index', {
        metaTitle: 'Front page title',
        metaDescription: 'Welcome to Nyxium front page'
    })
})

const server = http.createServer(app)
server.listen(port, () => console.log('server started!'))



// reload(app) --- dev purpose

