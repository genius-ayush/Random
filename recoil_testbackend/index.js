const express = require('express')
const app = express()
const port = 3000
const cors = require('cors') ;      
app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/notifications' , (req, res)=>{

    const network = Math.floor(Math.random()*10+1) ; 
    const notifications = Math.floor(Math.random()*10+1) ; 
    const messaging = Math.floor(Math.random()*10+1) ;
    
    res.send({network , notifications , messaging})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})