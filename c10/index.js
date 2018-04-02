var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1/reactgram", (err) => {
    if(err){
        console.error("Could not connect to database")
        console.error(err)
        
    }
});

const User = mongoose.model('user',
    {
        firstname: String,
        lastname: String,
        handle: String, //mandatory 
        email: String, //mandatory
        date_of_birth: Date,
        phone: String,
        location: {
            country: String,
            city: String,
            gps: {
                lat: Number,
                lng: Number
            }
        },
        avatar: String,
        password: String, //mandatory
    }
);

var app = express();
app.use(bodyParser.json());
app.use(cors());

//~~~~~~~~~~~~~~~~~~~~~~~USER ROUTES~~~~~~~~~~~~~~~~~~~~~~~~~ */

// ~~~~~~ GET ALL USERS~~~~~ */
app.get("/api/users", (req, res) => {
    User.find({},{password: 0, __v:0}, (err, data) => {
        if(err){
            res.status(500);
            return;
        }
        res.status(200);
        res.json(data)
        return;
    });
});

// ~~~~~~ GET SPECIFIED USER ~~~~~~ */
app.get("/api/users/:id", (req, res) => {
    User.findOne({ _id: req.params.id }, { password: 0, __v: 0 }, (err, data) => {
        if(err){
            res.status(500);
            res.send("Internal server error");
            return;
        }
        res.status(200);
        res.json(data);
    });
});

// ~~~~~~ CREATE NEW USER ~~~~~~ */
app.post("/api/users", (req, res) => {
    var isValid = 
    req.body.handle != undefined && req.body.handle != "" &&
    req.body.email != undefined && req.body.email != "" &&
    req.body.password != undefined && req.body.password != "";
    
    if(isValid){
        var u = new User(req.body);
        u.save((err) => {
            if(err){
                res.status(500);
                res.send("Internal server error");
                return;
            }
            res.status(200);
            res.send('OK');
            return;
        })
    } else{
        res.status(400);
        res.send("Bad Request");
        return;
    }
});

// ~~~~~~~ DEACTIVATE A USER ~~~~~~~ */
app.delete("/api/users/:id", (req, res) => {
    User.deleteOne({_id: req.params.id}, (err) => {
        if(err){
            if (err) {
                res.status(500);
                res.send("Internal server error");
                return;
            }
            res.status(200);
            res.send('OK');
            return;
        }
    })
});

app.listen(8080, () => {
    console.log('Server started on port 8080');
});
