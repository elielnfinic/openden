use rsa::{
    PublicKey, 
    RsaPrivateKey, 
    RsaPublicKey, 
    PaddingScheme};

use rand_chacha::ChaCha8Rng;

use bip32::ExtendedPrivateKey;

pub fn get_private_key(xprv : ExtendedPrivateKey) -> RsaPrivateKey{
    let priv_attrs = xprv.attrs();
    let chain_code : [u8; 32] = priv_attrs.chain_code;
    let mut seed = ChaCha8Rng::from_seed(chain_code);

    RsaPrivateKey::from_components(&mut seed, 256).unwrap()
}

pub fn get_public_key(rsa_pk : RsaPrivateKey) -> RsaPublicKey{
    RsaPublicKey::from(&rsa_pk)
}

