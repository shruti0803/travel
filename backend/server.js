const express=require("express");
const mysql=require('mysql');
    const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Rudrach@",
    database:"travel"
})
app.post('/register', (req, res)=>{
    const sql="INSERT INTO register (`name`, `email`, `password`, `package`) VALUES (?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.package
    ]
    db.query(sql,[values], (err,data)=>{
        if(err){
            return res.json("Eor");
        }
        return res.json(data);
    })
})
app.listen(8086, ()=>{
    console.log("listeNING");
})