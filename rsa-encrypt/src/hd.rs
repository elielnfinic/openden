use bip32::{Mnemonic, XPrv, ExtendedPrivateKey, ExtendedPublicKey, PublicKey};
use k256::ecdsa::{SigningKey, VerifyingKey};
use rand_core::OsRng;


pub fn generate_mnemonic() -> Mnemonic{
    Mnemonic::random(&mut OsRng,Default::default())
}

pub fn check_mnemonic(phrase : &str) -> Result<Mnemonic, &str>{
    match Mnemonic::new(phrase, Default::default()){
        Err(_) => Err("invalid mnemo"),
        Ok(res) => Ok(res)
    }
}

pub fn xprivate_key(mnemo : Mnemonic, password : &str) -> ExtendedPrivateKey<SigningKey>{
    let seed = mnemo.to_seed(password);
    XPrv::new(&seed).unwrap()
}

pub fn xpublic_key(xprv : ExtendedPrivateKey<SigningKey>) -> ExtendedPublicKey<VerifyingKey>{
    xprv.public_key()
}

pub fn get_blockchain_address(){
    //TBD
}