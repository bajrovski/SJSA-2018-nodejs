var FileModel = require("../models/files");
var fs = require('fs');
var path = require('path');

var uploadFile = (req, res) => {


    // console.log(req.files.dokument);
    // console.log(req.files.dokument.name);
    // console.log(req.files.dokument.encoding);

    var file = req.files.dokument;

    file.mv(__dirname + "/../uploads/" + file.md5 + '_' + file.name, (err) => {
        if (err) {
            console.log(' could not upload file!');
            return;
        }
        var fileData = {
            file_name: file.name,
            object_name: file.md5 + "_" + file.name,
            mime: file.mimetype,
            md5: file.md5
        }
        FileModel.addFile(fileData, (err) => {
            if (err) {
                console.log(err)
            }
        });
        console.log('file uploaded!');
    });
    res.send("ok");
}

var deleteFile = (req, res) => {

    FileModel.getOneFile(req.params.id, (err, data) => {
        if (err) {
            res.status(500);
            res.send("Internal server error. Could not get file name");
            return;
        }
        fs.unlink(path.join(__dirname + "/../uploads/" + data.object_name), (err) => {
            if (err) {
                res.status(500);
                res.send("Internal server error. Could not remove file from filesystem");
                return;
            }
            FileModel.deleteFile(req.param.id, (err) => {
                if (err) {
                    res.status(500);
                    res.send("Internal server error");
                    return;
                }
                res.status(200);
                res.send("ok");
                return;
            });
        });
    });
};

var getAllFiles = (req, res) => {
    FileModel.getAllFiles((err, data) => {
        if (err) {
            res.status(500);
            res.send("Internal server error");
        }
        res.status(200);
        res.json(data);
    });
}

var getOneFile = (req, res) => {
    FileModel.getOneFile(req.params.id, (err, data) => {
        if (err) {
            res.status(500);
            res.send("Internal server error");
        }
        res.status(200);
        res.send(data);
    });
}
var downloadFile = (req, res) => {
    FileModel.getOneFile(req.params.id, (err, data) => {
        if (err) {
            res.status(500);
            res.send("internal server error. Could not find file in database.");
            return;
        }
        res.download(path.join(__dirname, "/../uploads/", data.object_name), data.file_name, function (err) {
            if (err) {
                res.status(500);
                res.send("internal server error. Could not find file on storage.");
                return;
            }
        });
    });
}
module.exports = {
    getAllFiles,
    deleteFile,
    getOneFile,
    uploadFile,
    downloadFile
}