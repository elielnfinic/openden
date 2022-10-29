const {post} = require("./api");

export const add_subscriber = async (email, callback) => {
    return new Promise((resolve, reject) => {
        post("subscribe", {email}, callback).then(response => {
            resolve(response);
        });
    });
}
