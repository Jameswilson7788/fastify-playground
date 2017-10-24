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
  res.code(404)
     .header('content-type/json')
     .send({msg:'找不到資料'})
})

app.ready(() => {
  for (var route of app){
    console.log(route)
  }
})

app.listen(1637)
