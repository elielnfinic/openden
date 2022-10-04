import init,{get_mnemonic, generate_keys, get_private_key, generate_mnemonic_phrase} from "rsa-encrypt";

const getInfo = async () => {
  await init();
  //debugger;
  console.log(generate_keys());
  const data = await get_mnemonic("abcd");
  const data2 = await get_private_key("retreat olive cancel tilt depart antique reject jacket acoustic visit legend midnight rookie salon attitude poet timber panic armed supreme consider card body gas","");
  const data3 = await generate_mnemonic_phrase();
  console.log(data3);
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       IPFS Data Encrypt
      </header>

      <button onClick={getInfo}>Get mnemonic</button>
    </div>
  );
}

export default App;
