use actix_web::{get, web, App, HttpServer,HttpResponse,Responder};
use dotenv;
use actix_cors::Cors;

mod contact;

#[get("/")]
async fn index() -> impl Responder {
    HttpResponse::Ok()
        .header("Content-Type", "text/html")
        .body("Everything works!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()>{
    let server_addr = dotenv::var("SERVER_ADDR").expect("SERVER ADDRESS number must be set in .env");

    println!("Server is running on {}", server_addr);
 
        HttpServer::new(|| {
            
            App::new()
                .wrap(Cors::permissive())
                .service(contact::add)
                .service(index)
        })
        .bind(server_addr)?
        .run()
        .await
}
