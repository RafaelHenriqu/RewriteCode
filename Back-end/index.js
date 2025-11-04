import express from 'express'

const App = express()
const Names = [
  "Ana",
  "Bruno",
  "Carla",
  "Diego",
  "Eduarda",
  "Felipe",
  "Gabriela",
  "Henrique",
  "Isabela",
  "João",
  "Karen",
  "Lucas",
  "Mariana",
  "Nicolas",
  "Otávio",
  "Patrícia",
  "Rafael",
  "Sofia",
  "Tiago",
  "Vanessa"
];
const Routes = {
    "Routes":{
        "/":"Home",
    }
}

App.get("/",(req,res)=>{
    return res.json(Routes)
})

App.get("/get/:Item",(req,res)=>{
    if (req.params.Item == "Name"){
        return res.json({Name:Names[Math.floor(Math.random() * Names.length)]})
    }else{
        return res.json({warn:"Inezistent route"})
    }
})


App.listen(5000,(Error)=>{
    if (Error) return console.error(Error)
})