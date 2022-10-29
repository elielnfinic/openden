use actix_web::{web, App, HttpServer};
use dotenv;

mod contact;

#[actix_web::main]
async fn main() -> std::io::Result<()>{
    let server_addr = dotenv::var("SERVER_ADDR").expect("SERVER ADDRESS number must be set in .env");

    HttpServer::new(|| {
        App::new()
            .service(contact::add)
    })
    .bind(server_addr)?
    .run()
    .await
}
