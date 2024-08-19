import {getUsersDb, getUserDb, insertUserDb, deleteUserDb, updateUserDB} from '../model/userDb.js'
import {hash} from 'bcrypt'

const getUsers = async(req,res)=>{
    res.json(await getUsersDb())
}
const getUser = async(req,res)=>{
    res.json(await getUserDb(req.params.id))
}
const insertUser = async(req,res)=>{
    let {name,surname,age,fav_coding_lang,fav_car,eye_color,username,password} =req.body
    let hashedP = await hash(password,10)
    await insertUserDb(name,surname,age,fav_coding_lang,fav_car,eye_color,username,hashedP)
    res.send('Data was inserted successfully')
}
const deleteUser = async(req,res)=>{
    await deleteUserDb(req.params.id)
    res.send('User has been deleted')
}

const updateUser = async(req,res)=>{
    let {id,name,surname,age,fav_coding_lang,fav_car,eye_color,username} = req.body

    let user = await getUserDb(req.params.id)
    name ? name=name: name = user.name
    surname ? surname=surname: surname = user.surname
    age ? age=age: age = user.age
    colour ? colour=colour: colour = user.fav_colour   
    fav_coding_lang ? fav_coding_lang=fav_coding_lang: fav_coding_lang = user.fav_coding_lang
    fav_car ? fav_car=fav_car: fav_car = user.fav_car
    eye_color ? eye_color=eye_color: eye_color = user.eye_color
    username ? username=username: username = user.username
    await updateUserDB(req.params.id,name,surname,age,fav_coding_lang,fav_car,eye_color,username)
    res.send('Update was successful')
}

const loginUser = (req,res)=>{
    res.json({
        message:"You have signed in!!",
        token:req.body.token
    })
}

export {getUsers, getUser, insertUser, deleteUser, updateUser, loginUser} 