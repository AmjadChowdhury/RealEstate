import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photo = e.target.photo.value
        console.log(email,password)
        createUser(email,password)
        .then(result => {
            console.log(result.user)
            updateProfile(auth.currentUser, {
                displayName : name,
                photoURL : photo
            })
            .then(() => {
                alert('Profile updated')
            })
            .catch(error => {
                console.log(error.message)
            })
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className="my-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter PhotoURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-700">Register</button>
          </div>
        </form>
        <p className="mb-4 text-center text-xl font-semibold">Already have an account? <Link className="underline" to="/login">Login</Link></p>
      </div>
    </div>
    );
};

export default Register;