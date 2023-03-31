import express from "express"

const PORT = 5000;

const app = express()

app.use(express.json())
app.post("/:id",(req,res)=>{
    res.send(req.body)
    console.log(req.body)
    // console.log(req.host)
    console.log(req.hostname)
    console.log(req.ip)
    console.log(req.method)
    console.log(req.originalUrl)
    console.log(req.params)
    console.log(req.path)
    console.log(req.query)
})

app.listen(PORT,()=>{
    console.log(`Server Listening At Port Number ${PORT}`)
})
