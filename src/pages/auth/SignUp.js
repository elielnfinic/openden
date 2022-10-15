import React,{Component} from "react";
import WebMenus from "../../shared_components/web_site_menus";


class SignUp extends Component {
    render(){
        return(
            <div>
            <WebMenus/>
                <main className="mx-auto mt-1 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <h1 className="font-bold text-3xl text-slate-900 mb-5 text-center">Sign up now</h1>

                    <div className="mb-2">Please, use the following password to sign up </div>

                    <div className="">
                        <p>
                            <div className="p-10 bg-blue-100 rounded-md flex flex-row">
                                <div className="basis-11/12">
                                    abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about 
                                </div>
                                <div className="grid-cols-1/12">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                                    </svg>
                                </div>

                            </div>
                        </p>
                    </div>

                    <div>
                        <small className="text-red-700">
                            <input type="checkbox"/> I confirm that I have kept this password safe. If lost, you can redeem your files</small>
                    </div>

                    <div>
                        <button className="mt-1 flex items-center justify-center rounded-md border border-transparent bg-openden1 px-8 py-3 text-base font-medium text-white hover:bg-openden2 md:py-4 md:px-10 md:text-lg">Sign up</button>
                    </div>
                </main>
            </div>
        );
    }
}

export default SignUp;