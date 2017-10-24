const app = require('fastify')()

app.get('/',function(req,res){
  res.send({hello: 'world'})
})


app.listen(1637)
