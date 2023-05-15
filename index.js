const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const connection = require('./server/database')
const Question = require('./server/Question')
const cors = require('cors')

app.use(cors())

connection.authenticate()
  .then(()=>console.log('connected'))
  .catch((error)=> console.log(error))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (request, response)=>{
  Question.findAll({raw: true, order : [
    ['id', 'DESC'] // DESC = DECESCENTE | ASC = CRESCENTE
  ]}).then((questions)=>{
    response.json(questions)
  })
})

app.post('/savedata', (request, response)=>{
  const {title, body} = request.body
  Question.create({
    title,
    body
  }).then(()=>{
    response.redirect('http://localhost:3000/datasaved')
  })
})

app.listen( port , (error)=>{
  if(error) {
    console.log('error : ' + error)
  }
  else{
    console.log('server running on http://localhost:' + port)
  }
})