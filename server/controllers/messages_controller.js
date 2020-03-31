let messages = []
let id = 0

module.exports = {

    createMessage: (req, res) => {
        const { text, time } = req.body

        const newMessage = {
            text,
            time,
            id
        }
        messages.push(newMessage)

        id++

        res.status(200).send(messages)
    },

    getMessages: (req, res) => {
        res.status(200).send(messages)
    },

    updateMessages: (req, res) => {
            const { text } = req.body;
            const updateID = req.params.id;
            const messageIndex = messages.findIndex(message => message.id == updateID);
            let message = messages[messageIndex];
        
            messages[messageIndex] = {
              id: message.id,
              text: text || message.text,
              time: message.time
            };
        
            res.status(200).send(messages);
    },
    deleteMessage: (req, res) => {
        const { id } = req.params
        const index = messages.findIndex(messages => {
            return messages.id === +id
        })
        if (index === -1){
            return res.status(404).send('message not found')
        }
        messages.splice(index, 1)
        res.status(200).send(messages)
    }

}