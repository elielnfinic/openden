use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use mongodb::{Client, options::ClientOptions};
use mongodb::bson::{doc, Document};
use serde::{Serialize,Deserialize};
use serde_json;

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
    collection.insert_many(vec![doc!{"email":contact_obj.email.as_str()}],None).await.unwrap();
    println!("All is great");
    HttpResponse::Ok().body(req_body)
}