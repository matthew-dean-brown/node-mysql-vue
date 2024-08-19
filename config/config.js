import {createPool} from 'mysql2/promise'
import { config } from 'dotenv'
config()

const pool = createPool({
    database:process.env.DATABASE,
    user:process.env.USER,
    password:process.env.PASSWORD,
    host:process.env.HOST
})

export {pool}