const router = require('express').Router();
//Todo model import
const todoItemsModel = require('../models/todoItems');

//adding todoItems to db
router.post('/api/item', async (req, res)=>{
    try{
        const newItem = new todoItemsModel({
            item: req.body.item
        })

        //save to db
        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
    }catch(err){
        res.json(err);
    }
})

//retrieve data from db
router.get('/api/item', async (req, res)=>{
    try {
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems)
    } catch (err) {
        res.json(err)
    }
})

//update TodoItems
router.put('/api/item/:id', async (req, res)=>{
    try {
        //find item and update by id
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json(updateItem);
    } catch (err) {
        res.json(err);
    }
})


//delete todoItem from db
router.delete('/api/item/:id', async (req, res)=> {
    try {
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
    } catch (err) {
        res.json(err);
        
    }
})


module.exports = router;