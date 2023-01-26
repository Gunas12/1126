const express=require("express");
const cors=require("cors")
const bodyparser=require("body-parser")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
dotenv.config()
const {Schema}=mongoose
const Proschema=new Schema({
    img:{type:String, required:true},
    name:{type:String, required:true},
    about:{type:String, required:true},
    icon:{type:String, required:true},
    name2:{type:String, required:true},
    mark:{type:Number, required:true}

    
},
{timestamps:true}
)
const Product=mongoose.model("126items",Proschema)
const app=express()

app.use(cors())
app.use(bodyparser.json())
app.get("/",(req,res)=>{
    res.send("<h1>Admin Panel</h1>")
})
//ALL
app.get("/product",(req,res)=>{
    Product.find({},(err, doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            res.status(404).json({message:err})
        }
    })
})
//ID
app.get("/product/:id",(req,res)=>{
    const {id}=req.params
    Product.findById(id,(err, doc)=>{
        if(!err){
            if(doc)
           { res.send(doc)}
           else{
            res.send({message:"NOT FOUND"})
           }
        }
        else{
            res.status(404).json({message:err})
        }
    })
})
//Delete
app.delete("/product/:id",(req,res)=>{
    const {id}=req.params
    Product.findByIdAndDelete(id,(err)=>{
        if(!err){
           res.send("Deleted")
        }
        else{
            res.status(404).json({message:err})
        }
    })
})
//Add
app.post("/product",(req,res)=>{
     const newpro=new Product({
        img:req.body.img,
        name:req.body.name,
        about:req.body.about,
        icon:req.body.icon,
        name2:req.body.name2,
        mark:req.body.mark
     
    })
   newpro.save()
    res.send("Created")

})

//
const port=process.env.PORT
const url=process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)
mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err)
    console.log("DB connect");
    app.listen(port,()=>{
        console.log("Loading...");
    })
})

