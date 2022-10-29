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
pub fn check_mnemonic(phrase : &str) -> String{
    let check = hd::check_mnemonic(phrase);
    match check{
        Err(_) => String::from("invalid mnemo"),
        Ok(mn) => String::from("valid mnemo")
    }
}

#[wasm_bindgen]
pub fn encrypt_data(data : &str) -> String{
    String::from("Successful encryption")
}

#[wasm_bindgen]
pub fn generate_keys() -> String{

    //hd::xprivate_key(mnemo, password)
    String::from("Eliel")
}

#[cfg(test)]
mod tests{
    #[test]
    fn test_valid_mnemo(){
        let check = super::check_mnemonic("rib rifle salmon witness survey expose consider harbor develop merit creek calm crumble fiscal tragic concert market salute brisk typical bundle clip pilot candy");
        assert_eq!(check, String::from("valid mnemo"));
    }

    #[test]
    fn test_invalid_mnemo(){
        let check = super::check_mnemonic("fsdkjfsda");
        assert_eq!(check, String::from("invalid mnemo"));
    }
}