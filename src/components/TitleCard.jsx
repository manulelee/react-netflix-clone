import classes from "./TitleCard.module.css";
import { GENRES } from "../utils/http";
import { IoIosHeartEmpty, IoIosArrowDropdown, IoIosAddCircleOutline } from "react-icons/io";
import { IoPlayCircleOutline } from "react-icons/io5";

const TitleCard = ({ movie }) => {
  console.log(movie);
  return (
    <span className={classes.titleCard}>
      <img src={"https://image.tmdb.org/t/p/w300/" + movie.backdrop_path} alt="movie poster" />
      <div className={classes.info}>
        <h3 className="text-sm my-2">{movie.name || movie.original_title}</h3>
        <p className="m-0 text-2xl flex justify-between items-center">
          <span className="flex me-1">
            <IoPlayCircleOutline />
            <IoIosHeartEmpty />
            <IoIosAddCircleOutline />
          </span>
          <span>
            <IoIosArrowDropdown className="text-3xl" />
          </span>
        </p>
        <ul className="flex flex-row list-none ps-0 overflow-auto">
          {movie.genre_ids.map((id) => (
            <li className="p-1 overflow-y-visible">{GENRES.filter((genre) => genre.id === id)[0].name}</li>
          ))}
        </ul>
      </div>
    </span>
  );
};

export default TitleCard;
