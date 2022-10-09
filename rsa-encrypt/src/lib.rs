use wasm_bindgen::prelude::*;
use wee_alloc::WeeAlloc;
use bip32::{Prefix, XPrv, XPub, Mnemonic, Seed};
use rand_core::OsRng;

use k256::{elliptic_curve, pkcs8};

use bip32::secp256k1::ecdsa::{
    signature::{Signer, Verifier},
    Signature
};

use rsa::{
    PublicKey, 
    RsaPrivateKey, 
    RsaPublicKey, 
    PaddingScheme,
    pkcs8::{EncodePrivateKey, EncodePublicKey, DecodePrivateKey, DecodePublicKey},
    BigUint
};

use rand::*;

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
pub fn generate_mnemonic_phrase() -> String{
    let mnemonic = Mnemonic::random(&mut OsRng, Default::default());
    mnemonic.phrase().to_string()
}

#[wasm_bindgen]
pub fn get_private_key(phrase : &str, password : &str) -> String{
    let mnemonic = Mnemonic::new(phrase, Default::default()).unwrap();
    let seed = mnemonic.to_seed(password);
    let private_key = XPrv::new(&seed).unwrap();
    private_key.to_string(Prefix::XPRV).to_string()
}

#[wasm_bindgen]
pub fn get_public_key(phrase : &str, password : &str) -> String{
    let mnemonic = Mnemonic::new(phrase, Default::default()).unwrap();
    let seed = mnemonic.to_seed(password);
    let private_key = XPrv::new(&seed).unwrap();
    let public_key = private_key.public_key();
    public_key.to_string(Prefix::XPUB).to_string()
}

fn generate_encryption_keys() -> (RsaPrivateKey, RsaPublicKey){
    let mut rng = rand::thread_rng();
    let bit_size : usize = 256;

    let private_key = RsaPrivateKey::new(&mut rng, bit_size ).expect("Unable to generate private key");
    let public_key = RsaPublicKey::from(&private_key);
    (private_key, public_key)
}

#[wasm_bindgen]
pub fn rsa_encrypt(data : Vec<u8>) -> String{
    let mut rng = rand::thread_rng();
    let padding = PaddingScheme::new_pkcs1v15_encrypt();
    let keys = generate_encryption_keys();
    let encrypted = keys.1.encrypt(&mut rng, padding, &data).unwrap();
    base64::encode(encrypted) 
}

#[wasm_bindgen]
pub fn encrypt_data(data : &str, phrase : &str, password : &str) -> String{
    let mnemonic = Mnemonic::new(phrase, Default::default()).unwrap();
    let seed = mnemonic.to_seed(password);
    let private_key = XPrv::new(&seed).unwrap();
    let public_key = private_key.public_key();

    //let rsa_private_key = RsaPrivateKey::from(&private_key.to_bytes());
    let sign_key = private_key.private_key();
    //let signed = sign_key.sign

    //let rsa_xpr = RsaPrivateKey::try_from("oui");

    String::new()
}

#[cfg(test)]
mod tests{
    use rand_core::{RngCore, SeedableRng};
    use rsa::{RsaPrivateKey, BigUint, pkcs1::EncodeRsaPrivateKey};

    #[test]
    /*pub fn first(){
        println!("Trying a few things");
        println!("Testing {}",super::get_mnemonic("eliel"));
    }*/

    #[test]
    pub fn second(){
        let encrypted = super::rsa_encrypt(vec![10]);
        println!("Encrypted is {}", encrypted);
    }

    #[test]
    pub fn third(){
        let comp_1 = BigUint::from(1_u128);
        let comp_2 = BigUint::from(2_u128);
        let comp_3 = BigUint::from(3_u128);

        let primes = vec![BigUint::from(23_u128), BigUint::from(47_u128)];

        let mnemonic = super::Mnemonic::new("wreck mad stand kidney cabin area wheat steak attend fortune aerobic library input puzzle burger hurt draw rice ripple slab object certain total visit", Default::default()).unwrap();
        let seed = mnemonic.to_seed("");
        

        println!("The seed is {:?}", seed.as_bytes());
        

        let seed = [
            1, 0, 52, 0, 0, 0, 0, 0, 1, 0, 10, 0, 22, 32, 0, 0, 2, 0, 55, 49, 0, 11, 0, 0, 3, 0, 0, 0, 0,
            0, 2, 92,
        ];

        //let mut seed = rand_chacha::ChaCha8Rng();

        let mut seed = rand_chacha::ChaCha8Rng::from_seed(seed);

        let rsa_ = RsaPrivateKey::new(&mut seed, 256).unwrap();
        let str_rsa = rsa_.to_pkcs1_pem(rsa::pkcs8::LineEnding::default()).unwrap().to_string();
        println!("{:?}", str_rsa);

        return;

        let privx = RsaPrivateKey::from_components(comp_1, comp_2, comp_3, primes);
        println!("{}",privx.to_pkcs1_pem(rsa::pkcs8::LineEnding::default()).unwrap().to_string());

        return;

        let mut rng = rand::thread_rng();
        let numb = rng.next_u64();
        let numb2 = rng.next_u64();
        println!("{} et {}", numb, numb2);
        return;
        let x = 38;
        let private_b58 = "xprv9s21ZrQH143K3eqC5UZQ2Ysk6y3TAuhB8kw98SKoAGMvvmkViV8PFACUaAfVbhj776JEV5Z5Gs2ostQ2p1s5RgHmBFuJgum4tkWUtefcN2q";
        let privx = bs58::decode(private_b58).with_alphabet(bs58::Alphabet::RIPPLE).into_vec().unwrap();
        let hex_ = hex::encode(privx);
        //println!("x is {}", hex::encode(privx));
    }
}
