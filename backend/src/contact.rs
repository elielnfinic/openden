use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use mongodb::{Client, options::ClientOptions};
use mongodb::bson::{doc, Document};
use serde::{Serialize,Deserialize};
use serde_json;
use mail_send::Transport;
use mail_builder::MessageBuilder;

use dotenv;

#[derive(Deserialize)]
struct ContactFormObj{
    email : String
}

async fn connect_db() -> Client{
    let mut options = ClientOptions::parse(dotenv::var("MONGO_URI").unwrap()).await.unwrap();
    Client::with_options(options).unwrap()
}

#[post("/contact/add")]
pub async fn add(req_body: String) -> impl Responder {
    ///let db = connect_db();

    let client = Client::with_uri_str(dotenv::var("MONGO_URI").unwrap()).await.unwrap();
    let db = client.database("openden");
    let collection = db.collection::<Document>("contacts");
    let contact_obj : ContactFormObj = serde_json::from_str(&req_body).unwrap();
    let resp = collection.insert_many(vec![doc!{"email":contact_obj.email.as_str()}],None).await;
    match resp {
        Ok(_) => {
            let message = MessageBuilder::new()
                    .from(("Openden", "no-reply@openden.xyz"))
                    .to(vec![
                        ("", contact_obj.email.as_str())
                    ])
                    .subject("Thanks for joining to our waitlist")
                    .html_body("<h1>You are on the waitlist</h1><p>Thank you for joining the waitlist to store access privacy on the blockchain. <p>To ensure responsible use and a great experience, we'll be sending invites gradually over time.</p></p>")
                    .text_body("Thank you for joining the waitlist to store access privacy on the blockchain. \nTo ensure responsible use and a great experience, we'll be sending invites gradually over time.");
            Transport::new("mail.nfinic.com")
                    .credentials("safipay@nfinic.com", "cx3Y0H8xGMZEgf2FB")
                    .connect_tls()
                    .await
                    .unwrap()
                    .send(message)
                    .await
                    .unwrap();
                    HttpResponse::Ok()
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
                    .header("Access-Control-Allow-Headers", "Content-Type")
                    .header("Access-Control-Allow-Origin", "*")
                    .header("Access-Control-Allow-Credentials", "true")
                    .body("{'msg' : 'success'}")
        },
        Err(_) => {
            HttpResponse::Ok()
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
                    .header("Access-Control-Allow-Headers", "Content-Type")
                    .header("Access-Control-Allow-Origin", "*")
                    .header("Access-Control-Allow-Credentials", "true")
                    .body("{'msg' : 'error'}")
        }
    }
}