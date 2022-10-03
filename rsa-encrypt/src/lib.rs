use wasm_bindgen::prelude::*;
use wee_alloc::WeeAlloc;
use bip32::{Prefix, XPrv, Mnemonic, Seed};
use rand_core::OsRng;

use k256::{elliptic_curve, pkcs8};

extern crate wee_alloc;
extern crate bip39;

const ALLOC : WeeAlloc = WeeAlloc::INIT;

#[wasm_bindgen]
pub fn generate_keys() -> String{
    String::from("Eliel")
}

#[wasm_bindgen]
pub struct Identity{
    mnemonic : String,
    private_key : String, 
    public_key : String
}

impl std::fmt::Display for Identity{
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "Mnemonic : {}\n\nPrivate key : {}\n\nPublic key: {}", self.mnemonic, self.private_key, self.public_key)
    }
}

#[wasm_bindgen]
pub fn get_mnemonic(password : &str) -> Identity{
    let mnemonic = Mnemonic::random(&mut OsRng, Default::default());
    println!("{}",mnemonic.phrase());
    let seed = mnemonic.to_seed(password);
    let xprivate = XPrv::new(&seed).unwrap();
    let x = xprivate.to_string(Prefix::from_parts_unchecked("abcd", 0b1)).to_string();
    let p = xprivate.public_key();

    Identity{
        mnemonic : String::from(mnemonic.phrase()),
        private_key : x,
        public_key : p.to_string(Prefix::XPUB)
    }
}

#[wasm_bindgen]
pub fn get_private_key(phrase : &str, password : &str) -> String{
    let mnemonic = Mnemonic::new(phrase, Default::default()).unwrap();
    let seed = mnemonic.to_seed(password);
    let private_key = XPrv::new(&seed).unwrap();
    private_key.to_string(Prefix::XPRV).to_string()
}


#[cfg(test)]
mod tests{
    #[test]
    pub fn first(){
        println!("Trying a few things");
        println!("Testing {}",super::get_mnemonic("eliel"));
    }
}
