const express = require('express')
const cleverbot = require("cleverbot-free");
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))
// app.use(bodyParser)

app.get('/', (req, res) => {
    res.render('./chatbot.ejs', {
        x: "Talk to chatbot"
});  
})

app.post('/', async (req, res) => {
    // console.log(req.body)
    let ez = ""
    await cleverbot(req.body.texty).then(res => ez = res)
    console.log(req.body)
    console.log(ez)
    res.render('./chatbot.ejs', {
            x: ez
    });

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// the backend language we're using is called Node js
// it's basically javascript that can be used in the backend
// now, node is more than just that
// we're using Express, which is what allows us to use node as our backend language
// express is like that friend that brings node and our website together

