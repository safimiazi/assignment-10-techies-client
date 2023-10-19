import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleCreateUser = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, password, email)
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-700">
                    <form onSubmit={handleCreateUser} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn hover:bg-gray-900 text-white bg-gray-900">Register</button>
                        </div>
                        <div>
                            <p className="text-white">Already register? please <NavLink to='/login' className="underline">login</NavLink></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;