import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate()
    const {createUser, UserUpdate} = useContext(AuthContext)
    const handleCreateUser = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value
        console.log(name, password, email, photo)
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
          } else if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain 1 capital letter ");
            return;
          }
          else if (!specialChars.test(password)){
            toast.error("Password must contain 1 spacial  character ");
            return;
          }


        createUser(email, password)
        .then(result => {
            console.log(result.user)
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Registration successful!',
                confirmButtonText: 'OK'
              });
              
            navigate('/')
            UserUpdate(name, photo)
            .then(result => {
                console.log(result.user);
                
            })
            .then(error => {
                console.log(error.message);
            })

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
                                <span className="label-text text-white">Your photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="your photo" className="input input-bordered" required />
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