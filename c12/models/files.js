var mongoose = require("mongoose");

const File = mongoose.model('file', {
    file_name: String,
    object_name: String,
    mime: String,
    md5: String,
});

var addFile = (fileData, cb) => {
    var f = new File(fileData)
    f.save((err) => {
        if (err) {
            cb(err);
            return;
        }
        cb(null);
    });

}
var getOneFile = (id, cb) => {
    File.findOne({ _id: id }, (err, data) => {
        if (err) {
            cb(err, null);
            return;
        }
        cb(null, data);
        return;

    })
}
var getAllFiles = (cb) => {
    File.find({}, (err, data) => {
        if (err) {
            cb(err, null);
            return;
        }
        cb(null, data);
        return;
    });
}

var deleteFile = (id, cb) => {
    File.remove({ _id: id }, (err) => {
        if (err) {
            cb(err);
            return;
        }
        cb(null);
        return;

    })
}

module.exports = {
    addFile,
    getAllFiles,
    deleteFile,
    getOneFile
}