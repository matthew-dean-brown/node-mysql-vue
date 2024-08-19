import express from 'express'
import {getUsers, getUser, insertUser, deleteUser, updateUser, loginUser} from '../controller/userController.js'
import { checkUser } from '../middleware/authenticate.js'

const router = express.Router()

router.post('/login',checkUser,loginUser)
router.
    route('/')
        .get(getUsers)
        .post(insertUser)
        
router.
    route('/:id')
        .get(getUser)
        .delete(deleteUser)
        .patch(updateUser)
        
export default router