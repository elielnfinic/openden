use wasm_bindgen::prelude::*;
use wee_alloc::WeeAlloc;

extern crate wee_alloc;
const ALLOC : WeeAlloc = WeeAlloc::INIT;

#[wasm_bindgen]
pub fn get_mnemonic() -> String{
    String::from("Hello ze world")
}