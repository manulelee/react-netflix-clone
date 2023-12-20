import { useState } from "react";
import classes from "./Profile.module.css";
import { Form, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [name, setName] = useState("Emanuele");
  const [surname, setSurname] = useState("Syrbe");
  const [email, setEmail] = useState("emanuele@gmail.com");
  const [password, setPassword] = useState("qwerty");
  const [username, setUsername] = useState("lele");
  const navigate = useNavigate();

  const isDisabled = !name.trim() || !surname.trim() || !email.trim() || !password.trim() || !username.trim();
  let invalidInput = [];
  if (!name.trim()) {
    invalidInput.push("Name");
  } else if (!surname.trim()) {
    invalidInput.push("Surname");
  } else if (!email.trim()) {
    invalidInput.push("Email");
  } else if (!password.trim()) {
    invalidInput.push("Password");
  } else if (!username.trim()) {
    invalidInput.push("Username");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, surname, email, password, username };
    console.log(data);
    navigate("/");
  };

  return (
    <div className="content w-3/4 md:w-1/2 mx-auto mt-14">
      <h1 className="text-2xl font-bold">Profile</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <small className={classes.invalid}>
          {isDisabled && `Please fill ${invalidInput.map((input) => input.toLowerCase())} field `}
        </small>
        <label htmlFor="name">Name</label>
        <input required id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="lastName">Last name</label>
        <input required id="lastName" type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input required id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="username">Username</label>
        <input required id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={(e) => (e.target.type = "text")}
          onBlur={(e) => (e.target.type = "password")}
        />
        <div className={classes.buttonsContainer}>
          <button className={classes.reset} type="button">
            Reset
          </button>
          <button className={classes.save} type="submit" disabled={isDisabled}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProfilePage;
