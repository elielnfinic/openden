use wasm_bindgen::prelude::*;
use wee_alloc::WeeAlloc;

mod hd;

extern crate wee_alloc;
const ALLOC : WeeAlloc = WeeAlloc::INIT;

#[wasm_bindgen]
pub fn get_mnemonic() -> String{
    let mn = hd::generate_mnemonic();
    String::from(mn.phrase())
}


#[wasm_bindgen]
pub fn generate_keys() -> String{
    String::from("Eliel")
}