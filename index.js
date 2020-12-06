const express = require('express')
const cleverbot = require("cleverbot-free");
const app = express()
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('./chatbot.ejs', {
        from: "Talk to Chirpy!",
        to: ""
    });
})

app.post('/', async (req, res) => {
    let ez = ""
    await cleverbot(req.body.texty).then(res => ez = res)
    res.render('./chatbot.ejs', {
            to: req.body.texty,
            from: ez
    });

})

app.listen(port, () => console.log('ez'))
