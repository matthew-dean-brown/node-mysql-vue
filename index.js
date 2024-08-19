import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import fruitRouter from './routes/fruitRouter.js'
import userRouter from './routes/userRouter.js'
config()
let PORT = process.env.PORT || 5050

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:8080',
    credentials:true
}));

app.use(express.static('public'))

app.use('/users', userRouter)
app.use('/fruit', fruitRouter)

app.listen(PORT, ()=>{
    console.log('http://localhost:'+PORT);
})