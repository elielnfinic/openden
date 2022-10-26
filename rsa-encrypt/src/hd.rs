use bip32::{Mnemonic, XPrv, ExtendedPrivateKey, ExtendedPublicKey};
use rand_core::OsRng;


pub fn generate_mnemonic() -> Mnemonic{
    Mnemonic::random(&mut OsRng,Default::default())
}

pub fn xprivate_key(mnemo : Mnemonic, password : &str) -> ExtendedPrivateKey{
    let seed = mnemo.to_seed(password);
    XPrv::new(&seed).unwrap()
}

pub fn xpublic_key(xprv : ExtendedPrivateKey) -> ExtendedPublicKey{
    xprv.public_key()
}

pub fn get_blockchain_address(){
    //TBD
}