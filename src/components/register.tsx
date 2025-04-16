import { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import "./form.css";
import { Link } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [error, setError] = useState("");

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Error Passwords do not match");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const userData = { email, password, fname, lname };
      await setDoc(doc(db, "User", res.user.uid), {
        ...userData,
        Timestamp: serverTimestamp(),
      });
      setError("");
    } catch (err) {
      console.error("Error during registration:", err);
    }
  };

  return (
    <div className="form-page">
      <form onSubmit={(e) => handleAdd(e)}>
        <p className="title">Register</p>
        <input
          type="text"
          className="Form-input"
          placeholder="Enter First name"
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          className="Form-input"
          placeholder="Enter Last name"
          onChange={(e) => setLname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="Password"
          className="Form-input"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="Password"
          className="Form-input"
          placeholder="Confirm password"
        />
        <button type="submit">Sign up</button>
        <span>
          Already have an account <Link to="/login">Login</Link>
        </span>
        {error && <span className="error-message">{error}</span>}
      </form>
    </div>
  );
};
