import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [successRegister,setSuccessRegister] = useState('')
    const [errorRegister,setErrorRegister] = useState('')
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photo = e.target.photo.value
        const accepted = e.target.terms.checked
        console.log(email,password,accepted)

        setSuccessRegister('')
        setErrorRegister('')

        if(password.length < 6){
          setErrorRegister('Password must be greater than six character')
          return
        }
        else if(!/[A-Z]/.test(password)){
          setErrorRegister('Password must have one uppercase letter')
          return
        }
        else if(!accepted){
          setErrorRegister('Please check terms & condition!!!')
          return
        }
        // claer form..
        e.target.reset()


        createUser(email,password)
        .then(result => {
            console.log(result.user)
            setSuccessRegister(`${result.user?.displayName} created account successfully`)
            updateProfile(auth.currentUser, {
                displayName : name,
                photoURL : photo
            })
            .then(() => {
                alert('Profile updated')
            })
            .catch(error => {
                console.log(error.message)
                setErrorRegister(error.message)
            })
        })
        .catch(error => {
            console.log(error.message)
            setErrorRegister(error.message)
        })
    }
    return (
        <div className="my-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold">Name</span>
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
              <span className="label-text text-xl font-bold">PhotoURL</span>
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
              <span className="label-text text-xl font-bold">Email</span>
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
              <span className="label-text text-xl font-bold">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Check terms & condition</label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-700 font-bold text-white hover:bg-purple-700">Register</button>
          </div>

          <div>
            {
              successRegister && <p className="text-xl text-center font-bold text-green-700">{successRegister}</p>
            }
          </div>
          <div>
            {
              errorRegister && <p className="text-xl text-center font-bold text-red-700">{errorRegister}</p>
            }
          </div>
        </form>
        <p className="mb-4 text-center text-xl font-semibold">Already have an account? <Link className="underline" to="/login">Login</Link></p>
      </div>
    </div>
    );
};

export default Register;