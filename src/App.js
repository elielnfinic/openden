import {useState, useEffect, useRef} from "react";
import init,{get_mnemonic, generate_keys, get_private_key, get_public_key, generate_mnemonic_phrase} from "rsa-encrypt";



let private_key = "";

const App = () => {
  const [mnemonic, setMnemonic] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const getInfo = async () => {
    await init();
    console.log(generate_keys());
    const data = await get_mnemonic("abcd");
    private_key = await get_private_key("retreat olive cancel tilt depart antique reject jacket acoustic visit legend midnight rookie salon attitude poet timber panic armed supreme consider card body gas","");
    
    //console.log(data3);
  }

  const handleFileAdded = async (e, f) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      console.log(evt.target.result);
      
      console.log(`Private key ${private_key}`);
      const file_raw_content = evt.target.result;
  
    };
    reader.readAsText(e.target.files[0]);
  }

  const getMnemonic = async () => {
    await init();
    const mnemonic = await generate_mnemonic_phrase();
    setMnemonic(mnemonic);
  }

  const getPublicKey = async() => {
    await init();
    const private_key = await get_private_key();
    console.log(private_key);
  }

  const encryptFile = async () => {
    
    if(!mnemonic){
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

  return (
    <div className="App" style={{padding:"1cm"}}>
      <header className="App-header">
       IPFS Data Encrypt
      </header>
      <p>
        <button onClick={getMnemonic}>Get mnemonic</button>
        <div>{mnemonic}</div>
      </p>
      <p>
        <input type="file" onChange={handleFileAdded}/>
      </p>
      <p>
        <button onClick={encryptFile}>Encrypt file</button>
      </p>
      <p>
        <div>Public key : <div style={{width : "300px", margin:"10px", border: "1px solid gray"}}>{publicKey}</div></div>
        <div>Private key : <div style={{width : "300px", margin:"10px", border: "1px solid gray"}}>{privateKey}</div></div>
      </p>
    </div>
  );
}

export default App;
