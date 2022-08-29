var express=require("express");
var mongoose=require("mongoose");
var bodyparser=require("body-parser");
mongoose.connect("mongodb://localhost/Meetups");
var meetupSchema=new mongoose.Schema({
    address:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    }
})
var Meetupdata=mongoose.model("Meetupdata",meetupSchema);
var app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.get("/meetupdata/get",async function(req,res){
        Meetupdata.find(function(err,data){
        if(err){
            res.status(400).json({error:"can't find"});
        }
        else{
            res.status(200).json(data);
        }
    })


});
app.post("/meetupdata/post", async function(req,res){
    var body=req.body;
    var newMeet=Meetupdata({
        title:body.title,
        description:body.description,
        image:body.image,
        address:body.address
    })
    newMeet.save(function(err,data){
        if(err){
           res.status(400).json(err);
        }
        else{
            res.status(200).end()
        }
    })
})
app.listen(8080);