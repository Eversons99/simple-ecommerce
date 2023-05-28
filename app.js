import express from "express";
import routes from "./routes/index.js" 

const app = express();
const PORT = 3000;

app.use(routes)
app.use(express.static("C:/Users/Everson/Desktop/simple-ecommerce/public"))

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`)
})


