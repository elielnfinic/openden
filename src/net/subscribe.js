const {post} = require("./api");

exports.add = async (email, callback) => {
    return new Promise((resolve, reject) => {
        post("subscribe", {email}, callback).then(response => {
            resolve(response);
        });
    });
    
}