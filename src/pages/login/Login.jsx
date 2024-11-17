import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../provider/Provider";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const { googleLogin, setUser, LoginUser } = useContext(AuthProvider)
    const handelGoogleLogin = () => {
        googleLogin()
            .then(result => {
                setUser(result.user)
                navigate(location?.state ? location?.state : '/')
            })
            .catch(error => {
                console.log(error.code);
            })

    }

    const handelUserLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        LoginUser(email, password)
            .then(result => {
                setUser(result.user)
                navigate(location?.state ? location?.state : '/')
            })
            .catch(error => {
                console.log(error.code);
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">

            <div className="card bg-base-100 p-6 w-full max-w-lg shrink-0 shadow-2xl">
                <h3 className="font-medium text-3xl">Login</h3>
                <form onSubmit={handelUserLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>


                </form>
                <p className="ml-7">New to the website ? PLease <Link className="text-red-500" to='/register'>Register</Link></p>

                <p className="text-center"> or</p>
                <div className="form-control items-center mt-6">
                    <button onClick={handelGoogleLogin} className="btn btn-primary w-64">Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;