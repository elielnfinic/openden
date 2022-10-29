use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use mongodb::{Client, options::ClientOptions};
use mongodb::bson::{doc, Document};

use dotenv;

async fn connect_db() -> Client{
    let mut options = ClientOptions::parse(dotenv::var("MONGO_URI").unwrap()).await.unwrap();
    Client::with_options(options).unwrap()
}

#[post("/contact/add")]
pub async fn add(req_body: String) -> impl Responder {
    ///let db = connect_db();

    let client = Client::with_uri_str("mongodb+srv://test_user:gndl5e6AbUghJjfy@cluster0.za95y.mongodb.net/openden?retryWrites=true&w=majority").await.unwrap();
    let db = client.database("openden");
    let collection = db.collection::<Document>("contacts");
    collection.insert_many(vec![doc!{"email":"eliel@test.com"}],None).await.unwrap();
    /*for db_name in db.list_database_names(None, None).await.unwrap() {
        println!("{}", db_name);
    }*/
    println!("All is great");
    HttpResponse::Ok().body(req_body)
}