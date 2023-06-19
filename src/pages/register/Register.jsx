import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import Add from "../../assets/addAvatar.png";

import { auth, storage, db } from "./../../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getDatabase, set } from "firebase/database";

const Register = () => {
  const [value, setValue] = useState("");

  const [err, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    googleProvider.addScope(
      "https://www.googleapis.com/auth/contacts.readonly"
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      console.log(auth);
      const response = await signInWithEmailAndPassword(auth, email, password);

      print(response.user);

      // const storageRef = ref(storage, email);

      // const uploadTask = uploadBytesResumable(storageRef, file);

      // uploadTask.on(
      //   "state_changed",
      //   (snapshot) => {},
      //   (error) => {
      //     setError(true);
      //   },
      //   () => {
      //     // Handle successful uploads on complete
      //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      //       await updateProfile(response.user, {
      //         displayName: displayName,
      //         photoURL: downloadURL,
      //       });

      //       await setDoc(doc(db, "users", response.user.uid), {
      //         uid: response.user.uid,
      //         displayName,
      //         email,
      //         photoURL: downloadURL,
      //       });

      //       navigate("/");

      //       await setDoc(doc(db, "userChats", response.user.uid), {});

      //       // const db = getDatabase();
      //       // set(ref(db, 'users/' + response.user.uid), {
      //       //   uid: response.user.uid,
      //       //   displayName: displayName,
      //       //   email: email,
      //       //   photoURL : downloadURL
      //       // });
      //     });
      //   }
      // );
    } catch {
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ghup Shup</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span style={{ color: "red" }}>Something went wrong</span>}
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
