import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../provider/Provider";

const Register = () => {
    const {SignUpUser,user , setUser,userProfleUpdate} = useContext(AuthProvider)
    const Navigate = useNavigate()
    const handelRegister = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(photo);
        SignUpUser(email ,password)
        .then(() => {
            userProfleUpdate(name , photo)
            .then(result =>{
                setUser(result.user)

            })
            .catch(error =>{
                console.log(error.code);
            })
            Navigate('/')
        }).catch(error =>{
            console.log(error.code);
        })
    }
    console.log(user);
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-md shrink-0 p-6 shadow-2xl">
                <h3 className="font-semibold text-xl">Register </h3>
                <form onSubmit={handelRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <input name="name" type="text" placeholder=" Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="photo -url" className="input input-bordered" required />
                    </div>
                   
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
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p>AllReady have an account ? Please <Link className="text-red-500" to='/login'>Login</Link> </p>
            </div>

        </div>
    );
};

export default Register;