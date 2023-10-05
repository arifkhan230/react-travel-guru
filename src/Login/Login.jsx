import { Link } from "react-router-dom";
import facebook from '../assets/fb.png'
import google from '../assets/google.png'
import Navbar from "../pages/Shared/Navbar";


const Login = () => {

    return (
        
        <div>
            <Navbar></Navbar>
            <div className="hero mt-20">
                <div className="hero-content flex-col border w-2/5">
                    <div className="text-left">
                        <h1 className="text-left text-5xl font-bold">Login</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
                        <form className="card-body space-y-4">
                            <div className="form-control">

                                <input type="email" placeholder="Username or email" className="text-lg border-b-2" required />
                            </div>
                            <div className="form-control">

                                <input type="password" placeholder="password" className="border-b-2" required />
                                <div className="flex justify-between items-center py-4">
                                    <div>
                                        <input type="checkbox" name="remember" id="" />
                                        <span className="ml-4">Remember me</span>
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Login</button>
                            </div>
                            <p>Do not have an account? Please <Link className="text-orange-400" to="/register">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>

            <div className="w-2/5 mx-auto">
                <div className="flex justify-center items-center gap-2 my-4">
                    <div className="bg-[#aaa] w-1/3 h-[1px]">

                    </div>
                    <p>Or</p>
                    <div className="bg-[#aaa] w-1/3 h-[1px]">

                    </div>
                </div>
                <div className="flex flex-col w-3/5 mx-auto">
                    <div className="btn btn-outline w-full rounded-full mb-2">
                        <img className="w-[37px]" src={facebook} alt="" />
                        <button>Continue with facebook</button>
                    </div>
                    <div className="btn btn-outline w-full rounded-full">
                        <img className="w-[37px]" src={google} alt="" />
                        <button>Connect with google</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;