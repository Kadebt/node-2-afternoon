const express = require('express')
const contrl = require('./controllers/messages_controller')
const app = express()

app.use(express.json())
console.log(contrl)
app.post("/api/messages", contrl.createMessage)
app.get("/api/messages", contrl.getMessages)
app.put(`/api/messages/:id`, contrl.updateMessages)
app.delete(`/api/messages/:id`, contrl.deleteMessage)

const port = 3001
app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})