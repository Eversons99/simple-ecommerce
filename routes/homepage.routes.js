import express  from "express";
const routerHome = express.Router();

routerHome.get('', (req, res) => {
    res.sendFile("C:/Users/Everson/Desktop/simple-ecommerce/public/index.html")
});

export default routerHome