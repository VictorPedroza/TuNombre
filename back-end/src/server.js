const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    return res.send("Seja Bem-vinda Mi Amor")
})

const Routes = require("./routes")
app.use("/api", Routes)


app.listen(8088, () => {
    console.log("API is Running")
})