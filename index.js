import express from "express"
import bodyParser from "body-parser"
import axios from "axios"

const app = express()
const port = 3000
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))



app.get("/",  async (req,res)=>{
    try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        res.render("index.ejs", { recipe: response.data.meals[0]})
    }
    catch (error) {
        console.error("Failed to make request: ", error.message)
        res.status(500).send("failed to fetch activity. Please try again")
    }
})

app.post("/", (req,res)=>{
    res.render("inde.ejs")
})


app.listen(port, ()=>{
    console.log("Server running on port ", port)
})
