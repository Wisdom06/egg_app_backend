const express = require('express')
const cors = require('cors')
const pouleRouter = require('./src/routes/poule_routes')
const oeufRouter = require('./src/routes/oeuf_routes')
const etatRouter = require('./src/routes/etat_routes')


const port = 3300
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/poule',pouleRouter)
app.use('/api/oeuf',oeufRouter)
app.use('/api/etat',etatRouter)


app.listen(port,() => {
    console.log("server is starting on port "+port);

})
// process.on('SIGTERM',()=>{
//
// })
module.exports = app