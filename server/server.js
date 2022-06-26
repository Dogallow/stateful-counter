const express = require('express')
var cors = require('cors')
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')
let PORT = 5000;


const MONGODB_URI = 'mongodb+srv://123:1234@cluster0.myedxtr.mongodb.net/?retryWrites=true&w=majority'

// const connectDatabase = require('./config/database')
mongoose.connect(MONGODB_URI || 'mongodb://localhost/cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



// Saving data to our mongo database
// const data = {
//     body: 5500,
// }


// const newValue = new Value(data)

// newValue.save((error) => {
//     if (error) {
//         console.log('Oooops, something bad happened')

//     }else {
//         console.log('Data has been saved')
//     }
// })

const routes = require('./routes/api')

mongoose.connection.on('connected', ()=>{
    console.log('mongoose is connected')
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// // setting up config file
// DeviceMotionEvent.config({path: 'backend/config/config.env'})

// // connecting to database
// connectDatabase();


app.use(cors())
app.use(morgan('tiny'))
app.use('/', routes)

app.listen(PORT,()=>{console.log('App listening on port ' +PORT)})
