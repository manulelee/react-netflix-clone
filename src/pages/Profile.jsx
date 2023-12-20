import { useState } from "react";
import classes from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { replaceProfile } from "../store/profileSlice";
import { PROFILE_IMAGES as IMAGES } from "../utils/http";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const [name, setName] = useState(profile.name);
  const [surname, setSurname] = useState(profile.surname);
  const [email, setEmail] = useState(profile.email);
  const [selectedAvatar, setSelectedAvatar] = useState(profile.selectedAvatar);
  const [password, setPassword] = useState(profile.password);
  const [username, setUsername] = useState(profile.username);
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
    let data = { name, surname, email, selectedAvatar, password, username };
    console.log(data);
    dispatch(replaceProfile(data));
    navigate("/");
  };

  const handleDiscard = (e) => {
    setName(profile.name);
    setSurname(profile.surname);
    setEmail(profile.email);
    setPassword(profile.password);
    setUsername(profile.username);
    setSelectedAvatar(profile.seletedAvatar);
    navigate("/");
  };

  return (
    <div className="content w-3/4 md:w-1/2 mx-auto mt-14">
      <h1 className="text-2xl font-bold">Profile</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <small className={classes.invalid}>
          {isDisabled && `Please fill ${invalidInput.map((input) => input.toLowerCase())} field `}
        </small>
        <div className="flex flex-wrap">
          {IMAGES.map((image) => (
            <img
              src={image.link}
              key={image.id}
              alt="avatar"
              className={selectedAvatar.id === image.id ? "border border-red-600" : ""}
              onClick={() => setSelectedAvatar(image)}
            />
          ))}
        </div>
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
          <button onClick={handleDiscard} className={classes.reset} type="button">
            Discard
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
