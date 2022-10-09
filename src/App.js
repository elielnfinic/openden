import {useState, useEffect, useRef} from "react";
import init,{get_mnemonic, generate_keys,rsa_encrypt, get_private_key, get_public_key, generate_mnemonic_phrase} from "rsa-encrypt";



let private_key = "";
let file_content = null;

const App = () => {
  const [mnemonic, setMnemonic] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const handleFileAdded = async (e, f) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      console.log(evt.target.result);
      
      console.log(`Private key ${private_key}`);
      file_content = evt.target.result;
  
    };
    reader.readAsText(e.target.files[0]);
  }

  const getMnemonic = async () => {
    await init();
    const mnemonic = await generate_mnemonic_phrase();
    localStorage.mnemonic = mnemonic;
    setMnemonic(mnemonic);
  }

  const getPublicKey = async() => {
    await init();
    const private_key = await get_private_key();
    console.log(private_key);
  }

  const getKeys = async (mn) => {
    
    if(!mnemonic && !localStorage.mnemonic){
      const mn = prompt("Enter mnemonic or generate new");
      if(!mn) return;
      setMnemonic(mn);
    }
    await init();
    const private_key = await get_private_key(mnemonic, "");
    const public_key = await get_public_key(mnemonic,"");
    setPublicKey(public_key);
    setPrivateKey(private_key);
  }

  const __init = async () => {
    if(localStorage.mnemonic){
      setMnemonic(localStorage.mnemonic);
      getKeys(localStorage.mnemonic);
    }else{
      //alert("Was not found");
    }
  }

  const encryptFile = async() => {
    await init();
    console.log(file_content);
    let array_buf = [];
    for(var i = 0;i < 10000;i++){
      array_buf.push(0xfffffff);
    }
    console.log(array_buf);
    let encrypted = rsa_encrypt(new Uint8Array(array_buf));
    console.log("Encrypted", encrypted);
  }

  setTimeout(function(){
    __init();
  }, 300);

  return (
    <div className="App" style={{padding:"1cm"}}>
      <div>
          <header style={{textAlign:"center", fontSize : "40px"}}>
            IPFS Data Encrypt Wallet
          </header>
          <div style={{margin:"20px",background:"#f7f7f7",padding:"20px", border: "1px solid #d7d7d7", borderRadius: "10px"}}>
            <div style={{margin:"10px"}}><b>Identity</b></div>
            <div>
              <button onClick={getMnemonic}>Get new mnemonic & identity</button>
              <div><small>{mnemonic}</small></div><br/>
            </div>
            
            <div>
              <div>Public key : <div style={{width : "300px", margin:"10px", border: "1px solid gray"}}>{publicKey}</div></div>
              <div>Private key : <div style={{width : "300px", margin:"10px", border: "1px solid gray"}}>{privateKey}</div></div>
            </div>

          </div>

      </div>

      <div>
        <div>
          <input type="file" onChange={handleFileAdded}/>
        </div>
        <div style={{marginTop: "20px"}}>
          <button onClick={encryptFile}>Encrypt file</button>
        </div>
      </div>
    </div>
  );
}

export default App;
