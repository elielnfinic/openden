const {BACK_END_URL} = require("../config");

export const post = async (endpoint, data) => {
    return new Promise((resolve, reject) => {
        fetch(`${BACK_END_URL}/${endpoint}`,{
            method : "POST",
            headers : {
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(response => {
            resolve(response);
        });
    });   
}