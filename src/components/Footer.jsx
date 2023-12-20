import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto w-3/4">
        <p className="text-xl flex items-center">
          <a href="https://www.facebook.com/netflix" target="_blank" rel="noreferrer" className="mr-5">
            <FaFacebookF />
          </a>

          <a href="https://www.instagram.com/netflix" target="_blank" rel="noreferrer" className="mr-5 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com/netflix" target="_blank" rel="noreferrer" className="mr-5 text-2xl">
            <FaXTwitter />
          </a>
          <a href="https://www.youtube.com/netflix" target="_blank" rel="noreferrer" className="mr-5 text-3xl">
            <FaYoutube />
          </a>
        </p>
        <ul className="list-none opacity-60 grid grid-cols-2 md:grid-cols-4 my-3 leading-10 text-sm">
          <li>
            <Link to="/lorem">Audiodescription</Link>
          </li>
          <li>
            <Link to="/lorem">Help center</Link>
          </li>
          <li>
            <Link to="/lorem">Gift cards</Link>
          </li>
          <li>
            <Link to="/lorem">Mediacenter</Link>
          </li>
          <li>
            <Link to="/lorem">Relationships with investors</Link>
          </li>
          <li>
            <Link to="/lorem">Carreers opportunity</Link>
          </li>
          <li>
            <Link to="/lorem">Terms</Link>
          </li>
          <li>
            <Link to="/lorem">Privacy</Link>
          </li>
          <li>
            <Link to="/lorem">Legal notices</Link>
          </li>
          <li>
            <Link to="/lorem">Cookies preferences</Link>
          </li>
          <li>
            <Link to="/lorem">About us</Link>
          </li>
          <li>
            <Link to="/lorem">Contact us</Link>
          </li>
          <li>
            <Link to="/lorem">Adv preverences</Link>
          </li>
        </ul>
      </div>
      <p className="text-center text-xs mb-3">
        © 1997 - {new Date().getFullYear()}{" "}
        <a className="text-decoration-none" target="_blank" rel="noreferrer" href="mailto:emanuele.sy@gmail.com">
          Emanuele
        </a>
        , Inc.
      </p>
    </footer>
  );
};
export default Footer;
