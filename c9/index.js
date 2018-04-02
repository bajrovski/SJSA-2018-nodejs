const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/tv_shows', (err) => {
    if(err){
        console.log(err);
    }
    console.log('The database is running');
});

const Cat = mongoose.model('Cat', { name: String });

const Show = mongoose.model(
    'show',
    {
        "show_name": String,
        "production": String,
        "length": Number,
        "tags": []
    }
);

var show = new Show({
    show_name: "Black Mirror",
    production: "BBC",
    length: 60,
    tags: ["spooky", "no", "idk", "lol", "haha"]
});

show.save().then((err) => {
    if(err){
        console.error(err)
    }
    console.log("The new show has been added to the database");
});

