use wasm_bindgen::prelude::*;
use wee_alloc::WeeAlloc;
use bip32::{Prefix, XPrv, Mnemonic};
use rand_core::OsRng;

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

#[cfg(test)]
mod tests{
    #[test]
    pub fn first(){
        println!("Trying a few things");
        println!("Testing {}",super::get_mnemonic("eliel"));
    }
}

/*
fn gen() {
        let mnemonic = Mnemonic::new(MnemonicType::Words24, Language::English);
        let phrase: &str = mnemonic.phrase();
        println!("phrase: {:?}", mnemonic);

        
        let seed = Seed::new(&mnemonic, "");

        
        let seed_bytes: &[u8] = seed.as_bytes();

        
        println!("{:X}", seed);

        let root_xprv = XPrv::new(&seed).unwrap();
        

        let pubX = root_xprv.public_key();
        println!("Key is {:?}", pubX);

        let signing_key = root_xprv.private_key();
        let msg = b"Hello world";
        let encrypted = signing_key.sign(msg);

    
}*/