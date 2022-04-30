var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var teamname = req.body.teamname;
    var teamleadername = req.body.teamleadername;
    var email = req.body.email;
    var phone_no = req.body.phone_no;
    var mem21 = req.body.mem21;
    var email21 = req.body.email21;
    var phone_no21 = req.body.phone_no21;
    var mem31 = req.body.mem31;
    var email31 = req.body.email31;
    var phone_no31 = req.body.phone_no31;
    var mem41 = req.body.mem41;
    var email41 = req.body.email41;
    var phone_no41 = req.body.phone_no41;
    var mem51 = req.body.mem51;
    var email51 = req.body.email51;
    var phone_no51 = req.body.phone_no51;
   
    


    var data = {
        "teamname": teamname,
        "teamleadername" : teamleadername,
        "email" : email,
        "phone_no": phone_no,
        "mem21" : mem21,
        "email21" : email21,
        "phone_no21": phone_no21,
        "mem31" : mem31,
        "email31" : email31,
        "phone_no31": phone_no31,
        "mem41" : mem41,
        "email41" : email41,
        "phone_no41": phone_no41,
        "mem51" : mem51,
        "email51" : email51,
        "phone_no51": phone_no51,

       
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);


console.log("Listening on PORT 3000");