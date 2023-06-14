import express, { Router } from 'express'
import cors from 'cors'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import mongoose from 'mongoose'
import router from './rotuer'


const app = express()

app.use(cors({
    credentials:true

}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(compression())


const server = http.createServer(app)

server.listen(8080,()=>{
    console.log('Sever running on http://localhost:8080')

})
const MONGO_URL = "mongodb+srv://abeni:abeni@cluster0.h556vhf.mongodb.net/?retryWrites=true&w=majority"

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error',(error:Error)=>console.log(error))


app.use('/',router())





