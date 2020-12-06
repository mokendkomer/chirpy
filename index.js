const express = require('express')
const cleverbot = require("cleverbot-free");
const app = express()
const port = server.listen(process.env.PORT || 3000);

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('./chatbot.ejs', {
        x: "Talk to chatbot"
});  
})

app.post('/', async (req, res) => {
    let ez = ""
    await cleverbot(req.body.texty).then(res => ez = res)
    console.log(req.body)
    console.log(ez)
    res.render('./chatbot.ejs', {
            x: ez
    });

})

app.listen(port)
