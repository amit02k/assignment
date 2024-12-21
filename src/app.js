const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const userRoutes = require ('./routes/userRoutes')
const notesRoutes = require('./routes/notesRouter')
const PORT = 3000
app.use(express.json())
app.use(cors())
app.use('/api',userRoutes)
app.use('/api',notesRoutes)

mongoose.connect('mongodb+srv://amit_singh:kya_hal_hai_tere@cluster0.jpqo2bq.mongodb.net/amitInter')
.then(()=> console.log('Databse connected'))
.catch((err)=>console.log(err))

app.listen(PORT,()=>console.log(`server running on PORT ${PORT}`))

