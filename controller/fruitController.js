 import {getFruitsDb, getFruitDb, insertFruitDb, deleteFruitDb, updateFruitDB, addToCartDB} from '../model/fruitDb.js'
import { getUserDb } from '../model/userDb.js'

 const getFruits = async(req,res)=>{
    res.json(await getFruitsDb())
}
const getFruit = async(req,res)=>{
    res.json(await getFruitDb(req.params.id))
}
const insertFruit = async(req,res)=>{
    let {name,weight,amount} =req.body
    await insertFruitDb(name,weight,amount)
    res.send('Data was inserted successfully')
}
const deleteFruit = async(req,res)=>{
    await deleteFruitDb(req.params.id)
    res.send('Fruit has been deleted')
}

const updateFruit = async(req,res)=>{
    let {name,weight,amount} = req.body
    let fruit = await getFruitDb(req.params.id)
    name ? name=name: name = fruit.fruit_name
    weight ? weight=weight: weight = fruit.weight
    amount ? amount=amount: amount = fruit.amount
    await updateFruitDB(req.params.id,name,weight,amount)
    res.send('Update was successful')
}

const addToCart = async(req,res)=>{
    console.log(req.body);
    let {id} = await getUserDb(req.body.user)
    console.log(id);
    await addToCartDB(req.body.id,id)
    res.json({message:"You've added an item to cart"})
}
export {getFruits, getFruit, insertFruit, deleteFruit, updateFruit, addToCart}