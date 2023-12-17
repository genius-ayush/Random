const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')


const database = [] ;
let id = 0 ;  

app.use(cors()) ; 
app.use(bodyParser.json()) ; 


app.get('/todos' ,(req , res)=>{
    res.send(database) ; 
})

app.post('/todos' , (req , res)=>{
    const newTodo = {
        id:id++ , 
        title : req.body.title ,
        description : req.body.description 
    }

    database.push(newTodo) ;
    
    res.status(200).json(newTodo) ; 

})

app.delete('/todos/:id' , (req , res)=>{
    const todoIndex = database.findIndex(t => t.id === parseInt(req.params.id)) ; 

    if(todoIndex == -1){
        res.status(404).send() ; 
    }else{
        database.splice(todoIndex , 1 ) ; 
        res.status(200).send() ; 
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})