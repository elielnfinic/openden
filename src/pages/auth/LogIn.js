import React,{Component} from "react";
import WebMenus from "../../shared_components/web_site_menus";
import init,{get_mnemonic, check_mnemonic} from "rsa-encrypt";

class Login extends Component {
    state = {
        mnemonic : '',
        mnemonic_input : '',
        show_mnemonic_invalid : false,
        show_mnemonic_valid : false
    }

    componentDidMount(){
        //this.getMnemonic();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleLogin = async () => {
        if(this.state.mnemonic_input){
            await init();
            console.log("Checking");
            const res = await check_mnemonic(this.state.mnemonic_input);
            if(res == "valid mnemo"){
                this.setState({
                    show_mnemonic_valid : true,
                    show_mnemonic_invalid : false,
                });
                localStorage.mn = this.state.mnemonic_input;
                setTimeout(function(){
                    window.location.href = "/new-myfiles"
                },1000);
            }else{
                this.setState({
                    show_mnemonic_invalid : true,
                    show_mnemonic_valid : false,
                });
            }

        }else{
            console.log("Not found", this.state);
        }
    }


    render(){
        return(
            <div>
            <WebMenus/>
                <main className="mx-auto mt-1 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <h1 className="font-bold text-3xl text-slate-900 mb-5 text-center">Welcome back, please log in</h1>

                    <div className="mb-2">Enter your mnemonic phrase</div>

                    <div className="">
                        <p>
                            <textarea name="mnemonic_input" onChange={this.handleChange} placeholder="Enter mnemonic phrase here" className="p-2 rounded-md bg-sky-100 w-full"></textarea>
                        </p>
                    </div>

                    <div style={{display:this.state.show_mnemonic_valid ? '' : 'none'}}  className="bg-green-100 px-4 py-2 my-4 rounded-md">
                       Valid mnemonic phrase  
                    </div>

                    <div style={{display:this.state.show_mnemonic_invalid ? '' : 'none'}} className="bg-red-100 px-4 py-2 my-4 rounded-md">
                       Invalid mnemonic phrase  
                    </div>

                    <div>
                        <button onClick={this.handleLogin} className="mt-1 flex items-center justify-center rounded-md border border-transparent bg-openden1 px-8 py-3 text-base font-medium text-white hover:bg-openden2 md:py-4 md:px-10 md:text-lg">Log in</button>
                    </div>
                </main>
            </div>
        );
    }
}

export default Login;