import { pool } from "../config/config.js";

const getUsersDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}
const getUserDb = async (username) =>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE username = ?',[username])
    return data
}
const insertUserDb = async(name,surname,age,fav_coding_lang,fav_car,eye_color,username,password) =>{
    await pool.query(`
        INSERT INTO users 
        (name,surname,age,fav_coding_lang,fav_car,eye_color,username,password)
        VALUES (?,?,?,?,?,?,?,?)
        `,[name,surname,age,fav_coding_lang,fav_car,eye_color,username,password])
}
const deleteUserDb = async(id) =>{
    await pool.query('DELETE FROM users WHERE id = ?', [id])
}

const updateUserDB = async (id,name,surname,age,fav_coding_lang,fav_car,eye_color,username)=>{
    await pool.query('UPDATE users SET name = ?,surname = ?, age = ?,fav_coding_lang = ?,fav_car = ?, eye_color = ?,username = ?  WHERE id = ?',[name,surname,age,fav_coding_lang,fav_car,eye_color,username,id]
    )
}
// console.log(await insertUser('Matthew','23','purple','gatsby'))
// console.log(await getUsersDb());

// console.log(await getUser(1));


export {getUsersDb, getUserDb, insertUserDb, deleteUserDb, updateUserDB}