import { pool } from "../config/config.js";

const getFruitsDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM fruits')
    return data
}
const getFruitDb = async (id) =>{
    let [[data]] = await pool.query('SELECT * FROM fruits WHERE id = ?',[id])
    return data
}
const insertFruitDb = async(name,weight,amount) =>{
    await pool.query(`
        INSERT INTO fruits 
        (fruit_name,weight,amount)
        VALUES (?,?,?,?)
        `,[name,weight,amount])
}
const deleteFruitDb = async(id) =>{
    await pool.query('DELETE FROM fruits WHERE id = ?', [id])
}

const updateFruitDB = async (id,name,weight,amount)=>{
    await pool.query('UPDATE fruits SET fruit_name = ?,weight = ?, amount = ?  WHERE id = ?',[name,weight,amount,id]
    )
}

const addToCartDB = async(fruit_id,user_id)=>{
    await pool.query('INSERT INTO cart (fruit_id,user_id) VALUES (?,?)',[fruit_id,user_id])
}
// console.log(await insertFruit('Matthew','23','purple','gatsby'))
// console.log(await getFruitsDb());

// console.log(await getFruit(1));


export {getFruitsDb, getFruitDb, insertFruitDb, deleteFruitDb, updateFruitDB, addToCartDB}