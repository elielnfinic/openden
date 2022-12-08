const {BACK_END_URL} = require("../config");

export const post = async (endpoint, data) => {
    return new Promise((resolve, reject) => {
        return fetch(`${BACK_END_URL}/${endpoint}`,{
            method : "POST",
            headers : {
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            return res.text();
        })
        .then(response => {
            resolve(response);
        });
    });   
}