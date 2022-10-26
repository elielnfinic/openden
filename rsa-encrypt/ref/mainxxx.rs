extern crate rand;
extern crate bip39;

use bip39::{Mnemonic, Language};

fn main(){
    let mut rng = rand::thread_rng();
    let m = Mnemonic::generate_in_with(&mut rng, Language::English, 24).unwrap();
}
