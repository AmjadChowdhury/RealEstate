import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const UpdateProfile = () => {
  const [updateBtn, setUpdateBtn] = useState(false);
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;

  console.log(user);

  const handleSubmit = e => {
    e.preventDefault()
    const name = e.target.name.value
    const photo = e.target.photo.value
    console.log(name,photo)

    updateProfile(auth.currentUser, {
        displayName : name,
        photoURL : photo
    })
    .then(() => {
        alert("profile update from update nav")
        setUpdateBtn(false)
    })
    .catch(error => {
        console.log(error.message)
    })
  }
  return (
    <div className="">
      <div className="h-52 w-52 mx-auto">
        <img className="h-full w-full" src={photoURL} alt="" />
      </div>
      <h1 className="font-extrabold text-3xl text-center">{displayName}</h1>
      <p className="font-bold text-xl text-center">Email : {email}</p>
      <div className="text-center my-5">
        <p className="text-2xl font-semibold">Update korba ??</p>
        <div className="my-2">
          <button className="btn bg-green-700 mr-1 text-xl text-white" onClick={() => setUpdateBtn(true)}>
            Yes
          </button>
          <button className="btn bg-red-700 text-xl text-white">
            <Link to="/">No</Link>
          </button>
        </div>
      </div>
      <div className={`${updateBtn ? "" : "hidden"} md:w-1/2 m-auto`}>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl">Name</span>
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
              <span className="label-text font-bold text-xl">PhotoURL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter PhotoURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex justify-center my-2">
            <input className="btn bg-purple-700 text-white" type="submit" value="Update" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
