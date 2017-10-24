let i = 0
const app = require('fastify')({
  getReqId: function(req){
    return i++
  }
})

const schema = {
  response: {
    200: {
      type:"object",
      properties: {
        hello: {
          type: "string"
        }
      }
    }
  }
}

app.get('/',schema,function(req,res){
  res.send({ hello: 'world' })
})

app.ready(() => {
  for (var route of app){
    console.log(route)
  }
})

app.listen(1637)
