import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(email,password)
        signIn(email,password)
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => {
            console.log(error.message)
        })
        
    }

  return (
    <div className="my-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <form onSubmit={handleLogIn} className="card-body">
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
            <button className="btn bg-blue-700">Login</button>
          </div>
        </form>
        <p className="mb-4 text-center text-xl font-semibold">New ? Please <Link className="underline" to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
