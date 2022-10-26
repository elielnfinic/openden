use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn hello_ze_world() -> String{
    String::from("Hello ze world")
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
